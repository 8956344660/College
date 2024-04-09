package com.gymgenixs.entity;

import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "PLAN")
@Data
public class Plan {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "PLAN_ID")
    Long planId;
    @Column(name = "PLAN_NAME")
    String planName;
    @Column(name = "VALIDITY_IN_DAYS")
    int validityInDays;
    @Column(name = "AMOUNT")
    int amount;
    @Column(name = "DESCRIPTION")
    String description;

}
