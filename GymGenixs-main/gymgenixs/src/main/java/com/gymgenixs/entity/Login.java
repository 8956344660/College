package com.gymgenixs.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "LOGIN")
@Data
@Entity
public class Login {
    @Id
    @Column(name = "USER_ID")
    String userId;
    @Column(name = "PASSWORD")
    String password;
    @Column(name = "ROLE")
    String role;
    @Column(name = "STATUS")
    String status;
    @Column(name = "WRONG_ATTEMPT_COUNT")
    int wrongAttemptCount;
    @Column(name = "IS_ACCOUNT_LOCK")
    String isAccountLock;
    @Column(name = "LAST_PASSWORD_HISTORY")
    String lastPasswordList;
    @Column(name = "ADDRESS")
    String address;
    @Column(name = "GENDER")
    String gender;
    @Column(name = "MOBILE_NO")
    String mobileNo;



}
