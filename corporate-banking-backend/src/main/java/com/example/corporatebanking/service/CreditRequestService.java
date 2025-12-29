package com.example.corporatebanking.service;

import com.example.corporatebanking.model.CreditRequest;
import com.example.corporatebanking.model.enums.CreditStatus;
import com.example.corporatebanking.repository.CreditRequestRepository;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CreditRequestService {

    private final CreditRequestRepository repository;

    public CreditRequestService(CreditRequestRepository repository) {
        this.repository = repository;
    }

    public CreditRequest createRequest(CreditRequest request, String rmUsername) {
        request.setSubmittedBy(rmUsername); // ✅ STORE USERNAME
        request.setStatus(CreditStatus.PENDING);
        return repository.save(request);
    }
    

    
    public List<CreditRequest> getRequests(Authentication auth) {

        boolean isAnalyst = auth.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().toUpperCase().contains("ANALYST"));

        if (isAnalyst) {
            
            return repository.findAll();
        }

        
        return repository.findBySubmittedBy(auth.getName());
    }


    public CreditRequest updateStatus(
            String id,
            CreditStatus status,
            String remarks
    ) {
        CreditRequest req = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Request not found"));

        req.setStatus(status);
        req.setRemarks(remarks);
        return repository.save(req);
    }
}
