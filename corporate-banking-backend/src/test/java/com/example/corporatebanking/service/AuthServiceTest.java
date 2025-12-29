package com.example.corporatebanking.service;

import com.example.corporatebanking.config.JwtUtil;
import com.example.corporatebanking.model.User;
import com.example.corporatebanking.model.enums.Role;
import com.example.corporatebanking.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AuthServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder encoder;

    @Mock
    private JwtUtil jwtUtil;

    @InjectMocks
    private AuthService authService;

    @Test
    void register_success() {
        User user = new User();
        when(userRepository.save(any())).thenReturn(user);

        User saved = authService.register(
                "user", "mail@test.com", "pass", Role.RM);

        assertNotNull(saved);
        verify(userRepository).save(any());
    }

    @Test
    void login_success() {
        User user = new User();
        user.setUsername("user");
        user.setPassword("encoded");
        user.setRole(Role.ADMIN);

        when(userRepository.findByUsername("user"))
                .thenReturn(Optional.of(user));
        when(encoder.matches("pass", "encoded"))
                .thenReturn(true);
        when(jwtUtil.generateToken("user", "ADMIN"))
                .thenReturn("token");

        String token = authService.login("user", "pass");

        assertEquals("token", token);
    }

    @Test
    void login_invalidUsername_throwsException() {
        when(userRepository.findByUsername("bad"))
                .thenReturn(Optional.empty());

        assertThrows(ResponseStatusException.class,
                () -> authService.login("bad", "pass"));
    }

    @Test
    void login_invalidPassword_throwsException() {
        User user = new User();
        user.setPassword("encoded");

        when(userRepository.findByUsername("user"))
                .thenReturn(Optional.of(user));
        when(encoder.matches("wrong", "encoded"))
                .thenReturn(false);

        assertThrows(ResponseStatusException.class,
                () -> authService.login("user", "wrong"));
    }
}
