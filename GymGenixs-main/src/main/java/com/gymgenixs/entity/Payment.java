package com.gymgenixs.entity;

import lombok.Data;

import javax.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "PAYMENT")
@Data
public class Payment {
    @Id
    @Column(name = "PAYMENT_ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    Long id;
    @Column(name = "NAME_OF_PARTICIPANT")
    String nameOfParticipant;
    @Column(name = "MEMBER_ID")
    int memberId;
    @Column(name = "PLAN")
    String plan;
    @Column(name = "PRICE")
    int price;
    @Column(name = "PAID_DATE")
    LocalDate paidDate;
    @Column(name = "SYSTEM_CURRENT_DATE")
    LocalDate date;
}
