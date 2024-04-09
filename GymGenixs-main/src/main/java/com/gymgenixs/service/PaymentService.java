package com.gymgenixs.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.gymgenixs.dao.MemberDao;
import com.gymgenixs.dao.PaymentDao;
import com.gymgenixs.entity.Member;
import com.gymgenixs.entity.Payment;
import com.gymgenixs.gson.LocalDateTypeAdapter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class PaymentService {
    @Autowired
    PaymentDao paymentDao;

    @Autowired
    MemberDao memberDao;

    Gson gson = new GsonBuilder().registerTypeAdapter(LocalDate.class, new LocalDateTypeAdapter()).create();

    public Payment addPayment(String paymentStringDetails){

        log.info("Data received {}", paymentStringDetails);
        Payment payment = gson.fromJson(paymentStringDetails, Payment.class);
        log.info("data -> "+gson.toJson(payment));
        Optional<Member> member = memberDao.findById((long)payment.getMemberId());
        member.get().setStatus("ACTIVE");
        member.get().setPaidDate(payment.getPaidDate());
        member.get().setExpireDate(member.get().getPaidDate().plusDays(payment.getValidityInDays()));
        member.get().setDate(LocalDate.now());
        memberDao.save(member.get());
        return paymentDao.save(payment);
    }

    public List<Payment> getAllPayment(){
        return paymentDao.findAll();
    }

    public void deletePayment(long id){
        paymentDao.deleteById(id);
//        planDao.delete();
    }

    public List<Payment> getAllPaymentOrderByPaidDate(){
        return paymentDao.findAllOrderByPaidDateDesc();
    }

    public String getTotalFromDateRange(LocalDate fromDate, LocalDate toDate){
        return paymentDao.getTotalFromDateRange(fromDate, toDate);
    }
}
