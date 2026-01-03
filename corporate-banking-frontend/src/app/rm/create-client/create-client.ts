import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from '../clients.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-client.html',
  styleUrls: ['./create-client.css']
})

export class CreateClientComponent {

  client: Client = {
    companyName: '',
    industry: '',
    address: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    annualTurnover: 0,
    documentsSubmitted: false
  };

  loading = false;
  error = '';

  constructor(
    private service: ClientsService,
    private router: Router
  ) {}

  submit(): void {
    this.error = '';

    if (
      !this.client.companyName ||
      !this.client.industry ||
      !this.client.contactEmail ||
      this.client.annualTurnover <= 0
    ) {
      this.error = 'Please fill all required fields correctly';
      return;
    }

    this.loading = true;

    this.service.createClient(this.client).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/rm/clients']);
      },
      error: () => {
        this.loading = false;
        this.error = 'Failed to create client';
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/rm/clients']);
  }
}
