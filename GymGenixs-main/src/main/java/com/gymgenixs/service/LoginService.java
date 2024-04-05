package com.gymgenixs.service;

import com.google.gson.Gson;
import com.gymgenixs.dao.LoginDao;
import com.gymgenixs.dto.ClientDto;
import com.gymgenixs.dto.LoginDetails;
import com.gymgenixs.entity.Login;
import com.gymgenixs.utils.Md5;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class LoginService {
    @Autowired
    LoginDao loginDao;



    Gson gson = new Gson();

    public Login addLogin(String userStringDetails){

        log.info("Data received {}", userStringDetails);
        Login login = gson.fromJson(userStringDetails, Login.class);
        login.setPassword(Md5.getMd5(login.getPassword()));
        log.info("data -> "+gson.toJson(login));
        return loginDao.save(login);
    }

    public List<Login> getAllPlan(){
        return loginDao.findAll();
    }

    public void deletePlan(String id){
        loginDao.deleteById(id);
//        planDao.delete();
    }

    public ClientDto doLogin(String userName, String password){
        ClientDto clientDto = new ClientDto();
        String hashedPassword = Md5.getMd5(password);
        Optional<Login> login = loginDao.findById(userName);
        if(login.isEmpty()){
            clientDto.setErrorCode(401);
            clientDto.setErrorMessege("Invalid username or password");
        } else if("Y".equalsIgnoreCase(login.get().getIsAccountLock())) {
            clientDto.setErrorCode(402);
            clientDto.setErrorMessege("Account is Locked");
        }
        else if(!login.get().getPassword().equals(hashedPassword) && login.get().getWrongAttemptCount()==2) {
            loginDao.lockAccountForInvalidAttempts(userName);
            clientDto.setErrorCode(403);
            clientDto.setErrorMessege("Invalid username or password, Account is Locked");
        }
        else if(!login.get().getPassword().equals(hashedPassword)) {
            loginDao.updateLoginForInvalidAttempts(userName);
            clientDto.setErrorCode(401);
            clientDto.setErrorMessege("Invalid username or password");
        }
        else {
            loginDao.resetFlagsForSuccessfulAttempts(userName);
            clientDto.setErrorCode(400);
            clientDto.setErrorMessege("Logged In successfully");
            LoginDetails loginDetails = new LoginDetails();
            loginDetails.setUsername(userName);
            loginDetails.setRole(login.get().getRole());
            clientDto.setData(loginDetails);
        }
        return clientDto;
    }
}
