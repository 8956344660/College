package com.gymgenixs.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.gymgenixs.dao.PaymentDao;
import com.gymgenixs.entity.Payment;
import com.gymgenixs.gson.LocalDateTypeAdapter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@Slf4j
public class PaymentService {
    @Autowired
    PaymentDao paymentDao;

    @Autowired
    MemberService memberService;

    Gson gson = new GsonBuilder().registerTypeAdapter(LocalDate.class, new LocalDateTypeAdapter()).create();

    public Payment addPayment(String paymentStringDetails){

        log.info("Data received {}", paymentStringDetails);
        Payment payment = gson.fromJson(paymentStringDetails, Payment.class);
        log.info("data -> "+gson.toJson(payment));
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
