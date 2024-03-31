package com.gymgenixs.controller;

import com.gymgenixs.entity.Payment;
import com.gymgenixs.service.PaymentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@Slf4j
@CrossOrigin(originPatterns = "*")
public class PaymentApi {

    @Autowired
    PaymentService paymentService;

    @PostMapping("/addPayment")
    public Payment addPayment(@RequestBody String planData) throws UnsupportedEncodingException {
        try{
//            planData = URLDecoder.decode(planData, StandardCharsets.UTF_8.name());
            return paymentService.addPayment(planData);
        }
        catch(Exception e){
            log.error("",e);
        }
        return null;
    }
    @GetMapping("/getAllPayment")
    public List<Payment> getAllPayment(){
//        System.out.println(planService.getAllPlan());
        return paymentService.getAllPayment();
    }

    @GetMapping("deletePayment")
    public String deletePlanById(@RequestParam("id") long id){
        paymentService.deletePayment(id);
        return "deleted";
    }

    @GetMapping("findAllPayments")
    public List<Payment> getAllPaymentOrderByPaidDate(){
        return paymentService.getAllPaymentOrderByPaidDate();
    }

    @GetMapping("getTotalAmount")
    public String getTotalAmount(@RequestParam("fromDate") String fromDate, @RequestParam("toDate") String toDate){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate fromLocalDate = LocalDate.parse(fromDate, formatter);
        LocalDate toLocalDate = LocalDate.parse(toDate, formatter);
        log.info(fromLocalDate+" "+toLocalDate);
        return paymentService.getTotalFromDateRange(fromLocalDate,toLocalDate);
    }

}
