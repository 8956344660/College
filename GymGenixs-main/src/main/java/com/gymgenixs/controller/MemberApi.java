package com.gymgenixs.controller;

import com.gymgenixs.entity.Member;
import com.gymgenixs.entity.Plan;
import com.gymgenixs.service.MemberService;
import com.gymgenixs.service.PlanService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.util.List;

@RestController
@Slf4j
@CrossOrigin(originPatterns = "*")
public class MemberApi {

    @Autowired
    MemberService memberService;

    @PostMapping("/addMember")
    public Member addPlan(@RequestBody String planData) throws UnsupportedEncodingException {
        try{
//            planData = URLDecoder.decode(planData, StandardCharsets.UTF_8.name());
            return memberService.addMember(planData);
        }
        catch(Exception e){
            log.error("",e);
        }
        return null;
    }
    @GetMapping("/getAllMember")
    public List<Member> getAllPlan(){
//        System.out.println(planService.getAllPlan());
        return memberService.getAllMember();
    }

    @GetMapping("deleteMember")
    public String deletePlanById(@RequestParam("id") long id){
        memberService.deleteMember(id);
        return "deleted";
    }


}
