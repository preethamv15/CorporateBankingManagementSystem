package com.example.corporatebanking.controller;

import com.example.corporatebanking.model.User;
import com.example.corporatebanking.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final UserRepository userRepository;

    public AdminController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // ✅ GET ALL USERS
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // ✅ CREATE USER (ADMIN)
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // ✅ ENABLE / DISABLE USER
    @PutMapping("/users/{id}/status")
    public User toggleStatus(
            @PathVariable String id,
            @RequestParam boolean active
    ) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setActive(active);
        return userRepository.save(user);
    }
}
