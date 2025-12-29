import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserManagementService {

  private baseUrl = 'http://localhost:8080/api/admin/users';

  constructor(private http: HttpClient) {}

  createUser(data: {
    username: string;
    email: string;
    password: string;
    role: string;
  }): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}
