package com.example.corporatebanking.controller;

import com.example.corporatebanking.model.User;
import com.example.corporatebanking.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository repo;

    public UserController(UserRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/me")
    public User me(Authentication auth) {
        return repo.findByUsername(auth.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
