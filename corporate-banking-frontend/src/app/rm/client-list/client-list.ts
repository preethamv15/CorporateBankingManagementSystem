import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ClientsService } from '../clients.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.html'
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  loading = true;
  error = '';

  constructor(
    private service: ClientsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.loading = true;
    this.error = '';

    this.service.getMyClients().subscribe({
      next: (res) => {
        this.clients = res;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load clients';
        this.loading = false;
      }
    });
  }

  create(): void {
    this.router.navigate(['/rm/create-client']);
  }

  edit(id?: string): void {
    if (!id) return;   // ✅ Type-safe guard
    this.router.navigate(['/rm/edit-client', id]);
  }
}
