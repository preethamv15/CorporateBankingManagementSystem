import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditRequest } from './credit-request.model';

@Injectable({ providedIn: 'root' })
export class CreditRequestService {

  // ✅ DEFINE api HERE
  private api = 'http://localhost:8080/api/credit-requests';

  constructor(private http: HttpClient) {}

  // ✅ RETURN Observable (subscribe will work)
  create(form: {
    clientId: string;
    requestAmount: number;
    tenureMonths: number;
    purpose: string;
  }): Observable<CreditRequest> {
    return this.http.post<CreditRequest>(this.api, form);
  }

  getAll() {
  return this.http.get<any[]>('http://localhost:8080/api/credit-requests');
}

updateStatus(id: string, status: string, remarks: string) {
  return this.http.put(
    `http://localhost:8080/api/credit-requests/${id}?status=${status}&remarks=${remarks}`,
    {}
  );
}

}
