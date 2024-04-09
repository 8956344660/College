

create table PLAN(

    PLAN_ID int  UNSIGNED NOT NULL AUTO_INCREMENT primary key,
    PLAN_NAME varchar(50),
    VALIDITY_IN_DAYS int,
    AMOUNT int

);




  create table MEMBERS(

      MEMBER_ID int  UNSIGNED NOT NULL AUTO_INCREMENT primary key,
      PAID_DATE date,
      EXPIRE_DATE date,
      STATUS varchar(50),
      NAME_OF_PARTICIPANT varchar(50),
      EMERGENCY_CONTACT_PERSON_NAME varchar(50),
      RELATIONSHIP varchar(50),
      EMERGENCY_CONTACT_NUMBER varchar(50),
      MEMBER_CONTACT_NUMBER varchar(50),
      PLAN varchar(50),
      PRICE int,
      SYSTEM_CURRENT_DATE date,
      GENDER varchar(50)

  );

  create table PAYMENT(

        PAYMENT_ID int  UNSIGNED NOT NULL AUTO_INCREMENT primary key,
        PAID_DATE date,
        NAME_OF_PARTICIPANT varchar(50),
        PLAN varchar(50),
        PRICE int,
        SYSTEM_CURRENT_DATE date,
        MEMBER_ID int

    );

    create table login(
    USER_ID varchar(100) primary key,
    PASSWORD varchar(100),
    ROLE varchar(10),
    STATUS	varchar(100),
    WRONG_ATTEMPT_COUNT	int,
    IS_ACCOUNT_LOCK	varchar(10),
    LAST_PASSWORD_HISTORY	varchar(350),
    ADDRESS	varchar(1000),
    GENDER	varchar(50),
    MOBILE_NO	varchar(50),
    FIRST_NAME	varchar(50),
        LAST_NAME	varchar(50)
    );



    ALTER TABLE PLAN
    ADD DESCRIPTION varchar(1000);