import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../clients.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-edit-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-client.html',
  styleUrls: ['./edit-client.css']
})

export class EditClientComponent implements OnInit {

  client!: Client;
  id!: string;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private service: ClientsService,
    private router: Router
  ) {}

  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id')!;
  console.log('Edit Client ID:', this.id);  
  this.loadClient();
}

  loadClient(): void {
  this.service.getClientById(this.id).subscribe({
    next: (res) => {
      console.log('Client loaded:', res); 
      this.client = res;
      this.loading = false;
    },
    error: (err) => {
      console.error(err);                
      this.error = 'Failed to load client';
      this.loading = false;
    }
  });
}


  update(): void {
    this.service.updateClient(this.id, this.client).subscribe({
      next: () => this.router.navigate(['/rm/clients']),
      error: () => this.error = 'Failed to update client'
    });
  }

  cancel(): void {
    this.router.navigate(['/rm/clients']);
  }
}
