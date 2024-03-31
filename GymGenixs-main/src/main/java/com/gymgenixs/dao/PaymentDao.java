package com.gymgenixs.dao;

import com.gymgenixs.entity.Login;
import com.gymgenixs.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface PaymentDao extends JpaRepository<Payment, Long> {
    @Query("select payments from Payment payments order by paidDate desc")
    List<Payment> findAllOrderByPaidDateDesc();

    @Query(value = "select sum(payments.price) from Payment payments where paidDate between :fromDate and :toDate")
    String getTotalFromDateRange(@Param("fromDate") LocalDate fromDate, @Param("toDate") LocalDate toDate);

//    String findPaymentByPaidDateBetween(LocalDate toDate, LocalDate fromDate);


}
