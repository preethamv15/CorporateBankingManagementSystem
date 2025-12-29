package com.example.corporatebanking.repository;

import com.example.corporatebanking.model.Client;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ClientRepository extends MongoRepository<Client, String> {

    List<Client> findByRmUsername(String rmUsername);
}
