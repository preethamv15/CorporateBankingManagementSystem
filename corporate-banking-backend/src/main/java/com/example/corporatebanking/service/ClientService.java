package com.example.corporatebanking.service;

import com.example.corporatebanking.model.Client;
import com.example.corporatebanking.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private final ClientRepository repository;

    public ClientService(ClientRepository repository) {
        this.repository = repository;
    }

    
    public Client createClientForRm(Client client, String rmUsername) {

        client.setId(null); // safety
        client.setRmUsername(rmUsername);

        return repository.save(client);
    }

    
    public List<Client> getClientsForRm(String rmUsername) {
        return repository.findByRmUsername(rmUsername);
    }

    
    public Client getClientById(String id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found"));
    }
}
