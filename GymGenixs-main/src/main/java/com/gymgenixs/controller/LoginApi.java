package com.gymgenixs.controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.gymgenixs.dto.ClientDto;
import com.gymgenixs.entity.Login;
import com.gymgenixs.service.LoginService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@CrossOrigin(originPatterns = "*")
public class LoginApi {

    @Autowired
    LoginService loginService;
    @PostMapping("/saveLogin")
    public Login saveUserRegistration(@RequestBody String userData){
       return loginService.addLogin(userData);

    }

    @PostMapping("/login")
    public ClientDto doLogin(@RequestBody String userData){
        Gson gson = new Gson();
        JsonObject userCred = gson.fromJson(userData,JsonObject.class);
        return loginService.doLogin(userCred.get("username").getAsString(),userCred.get("password").getAsString());
    }


}
