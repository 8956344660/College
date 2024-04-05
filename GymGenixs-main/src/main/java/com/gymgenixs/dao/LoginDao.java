package com.gymgenixs.dao;

import com.gymgenixs.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface LoginDao extends JpaRepository<Login, String> {
    @Modifying
    @Transactional
    @Query("update Login l set l.wrongAttemptCount = l.wrongAttemptCount+1 where l.userId= :username")
    void updateLoginForInvalidAttempts(@Param("username") String userId);

    @Modifying
    @Transactional
    @Query("update Login l set l.wrongAttemptCount = l.wrongAttemptCount+1, l.isAccountLock='Y' where l.userId= :username")
    void lockAccountForInvalidAttempts(@Param("username") String userId);

    @Modifying
    @Transactional
    @Query("update Login l set l.wrongAttemptCount = 0, l.isAccountLock='N' where l.userId= :username")
    void resetFlagsForSuccessfulAttempts(@Param("username") String userId);
}
