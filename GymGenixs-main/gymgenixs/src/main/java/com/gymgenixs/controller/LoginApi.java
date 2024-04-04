package com.gymgenixs.controller;

import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@CrossOrigin(originPatterns = "*")
public class LoginApi {

    @Autowired
    LoginService loginService;
    @PostMapping("/saveLogin")
    public String saveUserRegistration(@RequestBody String userData){
        loginService.addLogin(userData);
        return "yes";
    }


}
