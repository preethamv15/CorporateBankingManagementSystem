package com.example.corporatebanking.service;

import com.example.corporatebanking.model.CreditRequest;
import com.example.corporatebanking.model.enums.CreditStatus;
import com.example.corporatebanking.repository.CreditRequestRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CreditRequestServiceTest {

    @Mock
    private CreditRequestRepository repository;

    @InjectMocks
    private CreditRequestService service;

    @Test
    void createRequest_success() {
        CreditRequest request = new CreditRequest();

        when(repository.save(any()))
                .thenAnswer(i -> i.getArgument(0));

        CreditRequest saved =
                service.createRequest(request, "rm1");

        assertEquals("rm1", saved.getSubmittedBy());
        assertEquals(CreditStatus.PENDING, saved.getStatus());
    }

    @Test
    void updateStatus_success() {
        CreditRequest request = new CreditRequest();

        when(repository.findById("1"))
                .thenReturn(Optional.of(request));
        when(repository.save(any()))
                .thenAnswer(i -> i.getArgument(0));

        CreditRequest updated =
                service.updateStatus("1", CreditStatus.APPROVED, "ok");

        assertEquals(CreditStatus.APPROVED, updated.getStatus());
        assertEquals("ok", updated.getRemarks());
    }

    @Test
    void updateStatus_notFound_throwsRuntimeException() {
        when(repository.findById("1"))
                .thenReturn(Optional.empty());

        assertThrows(RuntimeException.class,
                () -> service.updateStatus("1", CreditStatus.REJECTED, "no"));
    }
}
