package com.gymgenixs.controller;

import com.google.gson.Gson;
import com.gymgenixs.dao.LoginDao;
import com.gymgenixs.dao.PlanDao;
import com.gymgenixs.entity.Plan;
import com.gymgenixs.service.PlanService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@Slf4j
@CrossOrigin(originPatterns = "*")
public class PlanApi {
    @Autowired
    PlanService planService;

    @PostMapping("/addPlan")
    public Plan addPlan(@RequestBody String planData) throws UnsupportedEncodingException {
        try{
//            planData = URLDecoder.decode(planData, StandardCharsets.UTF_8.name());
            return planService.addPlan(planData);
        }
        catch(Exception e){
            log.error("",e);
        }
        return null;
    }
    @GetMapping("/getAllPlan")
    public List<Plan> getAllPlan(){
//        System.out.println(planService.getAllPlan());
        return planService.getAllPlan();
    }

    @GetMapping("deletePlan")
    public String deletePlanById(@RequestParam("id") long id){
        planService.deletePlan(id);
        return "deleted";
    }


}
