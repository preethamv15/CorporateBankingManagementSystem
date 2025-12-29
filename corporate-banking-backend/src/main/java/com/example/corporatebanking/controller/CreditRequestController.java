package com.example.corporatebanking.controller;

import com.example.corporatebanking.model.CreditRequest;

import com.example.corporatebanking.model.enums.CreditStatus;
import com.example.corporatebanking.service.CreditRequestService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/credit-requests")
public class CreditRequestController {

    private final CreditRequestService service;

    public CreditRequestController(CreditRequestService service) {
        this.service = service;
    }

    @PostMapping
    public CreditRequest create(
            @RequestBody CreditRequest request,
            Authentication auth
    ) {
        return service.createRequest(request, auth.getName());
    }

    @GetMapping
    public List<CreditRequest> getAll(Authentication auth) {
        return service.getRequests(auth);
    }


    @PutMapping("/{id}")
    public CreditRequest update(
            @PathVariable String id,
            @RequestParam CreditStatus status,
            @RequestParam String remarks
    ) {
        return service.updateStatus(id, status, remarks);
    }
}
