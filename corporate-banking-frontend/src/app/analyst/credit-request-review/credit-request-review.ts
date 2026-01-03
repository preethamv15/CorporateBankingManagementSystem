import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreditRequestService } from '../../credit-requests/credit-requests.service';

@Component({
  selector: 'app-credit-request-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './credit-request-review.html',
  styleUrls: ['./credit-request-review.css']
})
export class CreditRequestReviewComponent implements OnInit {

  requests: any[] = [];
  loading = true;
  error = '';

  selectedRequest: any = null;
  remarks = '';

  constructor(private service: CreditRequestService) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (res: any[]) => {
        this.requests = res;
        this.loading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.error = 'Failed to load credit requests';
        this.loading = false;
      }
    });
  }

  select(request: any) {
    this.selectedRequest = request;
    this.remarks = request.remarks || '';
  }

  approve() {
    this.updateStatus('APPROVED');
  }

  reject() {
    this.updateStatus('REJECTED');
  }

  updateStatus(status: string) {
    if (!this.selectedRequest) return;

    this.service.updateStatus(
      this.selectedRequest.id,
      status,
      this.remarks
    ).subscribe({
      next: () => {
        this.selectedRequest = null;
        this.remarks = '';
        this.loadRequests();
      },
      error: (err: any) => {
        console.error(err);
        this.error = 'Failed to update status';
      }
    });
  }
}
