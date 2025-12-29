import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditRequestService } from '../../credit-requests/credit-requests.service';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-create-credit-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-credit-request.html'
})
export class CreateCreditRequestComponent implements OnInit {

  clients: any[] = [];

  form = {
    clientId: '',
    requestAmount: 0,
    tenureMonths: 0,
    purpose: ''
  };

  error = '';
  loading = false;

  constructor(
    private creditService: CreditRequestService,
    private clientsService: ClientsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientsService.getMyClients().subscribe({
      next: res => this.clients = res,
      error: (err: any) => {
        console.error(err);
        this.error = 'Failed to load clients';
      }
    });
  }

  submit() {
    this.error = '';

    if (
      !this.form.clientId ||
      this.form.requestAmount <= 0 ||
      this.form.tenureMonths <= 0 ||
      !this.form.purpose
    ) {
      this.error = 'All fields are required';
      return;
    }

    this.loading = true;

    this.creditService.create(this.form).subscribe({
      next: () => {
        this.router.navigate(['/rm/credit-requests']);
      },
      error: (err: any) => {
        console.error(err);
        this.error = 'Failed to create credit request';
        this.loading = false;
      }
    });
  }
}
