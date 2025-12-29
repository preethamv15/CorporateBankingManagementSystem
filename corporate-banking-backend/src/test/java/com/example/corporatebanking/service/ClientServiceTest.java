package com.example.corporatebanking.service;

import com.example.corporatebanking.model.Client;
import com.example.corporatebanking.repository.ClientRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ClientServiceTest {

    @Mock
    private ClientRepository clientRepository;

    @InjectMocks
    private ClientService clientService;

    @Test
    void createClientForRm_setsRmUsername() {
        Client client = new Client();

        when(clientRepository.save(any()))
                .thenAnswer(i -> i.getArgument(0));

        Client saved = clientService.createClientForRm(client, "rm1");

        assertEquals("rm1", saved.getRmUsername());
    }

    @Test
    void getClientsForRm_returnsClients() {
        when(clientRepository.findByRmUsername("rm1"))
                .thenReturn(List.of(new Client()));

        List<Client> clients = clientService.getClientsForRm("rm1");

        assertEquals(1, clients.size());
    }

    @Test
    void getClientById_success() {
        when(clientRepository.findById("1"))
                .thenReturn(Optional.of(new Client()));

        Client client = clientService.getClientById("1");

        assertNotNull(client);
    }

    @Test
    void getClientById_notFound_throwsRuntimeException() {
        when(clientRepository.findById("1"))
                .thenReturn(Optional.empty());

        assertThrows(RuntimeException.class,
                () -> clientService.getClientById("1"));
    }
}
