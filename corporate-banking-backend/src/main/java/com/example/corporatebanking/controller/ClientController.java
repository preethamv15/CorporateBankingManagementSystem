package com.example.corporatebanking.controller;

import com.example.corporatebanking.model.Client;
import com.example.corporatebanking.service.ClientService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientService service;

    public ClientController(ClientService service) {
        this.service = service;
    }

    // ✅ RM → create client
    @PostMapping("/rm")
    public Client createClient(@RequestBody Client client, Authentication auth) {
        System.out.println(">>> CREATE CLIENT API HIT by: " + auth.getName());
        return service.createClientForRm(client, auth.getName());
    }


    // ✅ RM → view own clients
    @GetMapping("/rm")
    public List<Client> getMyClients(Authentication auth) {
        return service.getClientsForRm(auth.getName());
    }

    // ✅ Get client by ID (edit/view)
    @GetMapping("/{id}")
    public Client getById(@PathVariable String id) {
        return service.getClientById(id);
    }
}
