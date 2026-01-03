import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditRequestService } from '../../credit-requests/credit-requests.service';

@Component({
  selector: 'app-credit-request-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit-request-list.html',
  styleUrls: ['./credit-request-list.css']
})
export class CreditRequestListComponent implements OnInit {

  requests: any[] = [];
  loading = true;
  error = '';

  constructor(private service: CreditRequestService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (res: any[]) => {
        this.requests = res;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.error = 'Failed to load credit requests';
        this.loading = false;
      }
    });
  }
}
