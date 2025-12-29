package com.example.corporatebanking.controller;

import com.example.corporatebanking.dto.LoginRequest;
import com.example.corporatebanking.dto.RegisterRequest;
import com.example.corporatebanking.model.User;
import com.example.corporatebanking.model.enums.Role;
import com.example.corporatebanking.service.AuthService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService service;

    public AuthController(AuthService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest r) {

        User user = service.register(
                r.getUsername(),
                r.getEmail(),
                r.getPassword(),
                Role.valueOf(r.getRole())
        );

        return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        String token = service.login(
                request.getUsername(),
                request.getPassword()
        );

        User user = service.getUserByUsername(request.getUsername());

        return ResponseEntity.ok(Map.of(
                "token", token,
                "role", user.getRole().name()
        ));
    }
}
