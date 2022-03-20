package com.example.demo;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class ContactoController {
    User user;

    @GetMapping("/usersGET")
    public User getUser(){
        return user;
    }

    @PostMapping("/usersPOST")
    public void postUser(@Valid @RequestBody User user){
        this.user = user;
    }

    

}
