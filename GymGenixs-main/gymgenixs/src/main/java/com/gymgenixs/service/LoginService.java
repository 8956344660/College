package com.gymgenixs.service;

import com.google.gson.Gson;
import com.gymgenixs.dao.LoginDao;
import com.gymgenixs.entity.Login;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class LoginService {
    @Autowired
    LoginDao loginDao;



    Gson gson = new Gson();

    public Plan addLogin(String userStringDetails){

        log.info("Data received {}", userStringDetails);
        Login login = gson.fromJson(userStringDetails, Login.class);
        login.setPassword(Md5.getMd5(login.getPassword()));
        log.info("data -> "+gson.toJson(login));
        return loginDao.save(login);
    }

    public List<Login> getAllPlan(){
        return loginDao.findAll();
    }

    public void deletePlan(long id){
        loginDao.deleteById(id);
//        planDao.delete();
    }
}
