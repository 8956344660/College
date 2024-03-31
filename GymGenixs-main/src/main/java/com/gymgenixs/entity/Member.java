package com.gymgenixs.entity;



import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "MEMBERS")
@Data
public class Member {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "Member_ID")
    Long memberId;
    @Column(name = "PAID_DATE")
    LocalDate paidDate;
    @Column(name = "EXPIRE_DATE")
    LocalDate expireDate;
    @Column(name = "STATUS")
    String status;
    @Column(name = "NAME_OF_PARTICIPANT")
    String nameOfParticipant;
    @Column(name = "EMERGENCY_CONTACT_PERSON_NAME")
    String emergencyContactPerson;
    @Column(name = "RELATIONSHIP")
    String relationship;
    @Column(name = "EMERGENCY_CONTACT_NUMBER")
    String emergencyContactNumber;
    @Column(name = "PLAN")
    String plan;
    @Column(name = "PRICE")
    int price;
    @Column(name = "MEMBER_CONTACT_NUMBER")
    String memberContactNumber;
    @Column(name = "SYSTEM_CURRENT_DATE")
    LocalDate date;
    @Column(name = "GENDER")
    String gender;

    @Transient
    int validityInDays;

}
