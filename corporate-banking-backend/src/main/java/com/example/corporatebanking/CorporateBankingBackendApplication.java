package com.example.corporatebanking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CorporateBankingBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CorporateBankingBackendApplication.class, args);
		System.out.println("Backend running");
	}

}
