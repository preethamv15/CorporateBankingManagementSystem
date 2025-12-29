package com.example.corporatebanking.model;

import com.example.corporatebanking.model.enums.CreditStatus;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "creditRequests")
public class CreditRequest {

    @Id
    private String id;

    private String clientId;
    private String clientName;   

    private double requestAmount;
    private int tenureMonths;
    private String purpose;

    private CreditStatus status;
    private String remarks;

    private String submittedBy;
}


