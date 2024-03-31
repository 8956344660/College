package com.gymgenixs.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.gymgenixs.dao.MemberDao;
import com.gymgenixs.entity.Member;
import com.gymgenixs.gson.LocalDateTypeAdapter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Slf4j
public class MemberService {
    @Autowired
    MemberDao memberDao;

    Gson gson = new GsonBuilder().registerTypeAdapter(LocalDate.class, new LocalDateTypeAdapter()).create();

    public Member addMember(String memberStringDetails){

        log.info("Data received {}", memberStringDetails);
        Member member = gson.fromJson(memberStringDetails, Member.class);
        member.setExpireDate(member.getExpireDate().plusDays(member.getValidityInDays()));
        log.info("data -> "+gson.toJson(member));
        return memberDao.save(member);
    }

    public List<Member> getAllMember(){
        return memberDao.findAll();
    }

    public void deleteMember(long id){
        memberDao.deleteById(id);
    }
}
