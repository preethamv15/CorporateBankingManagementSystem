package com.example.corporatebanking.repository;

import com.example.corporatebanking.model.CreditRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CreditRequestRepository
extends MongoRepository<CreditRequest, String> {

List<CreditRequest> findBySubmittedBy(String username);
}
