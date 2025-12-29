import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client.model';

@Injectable({ providedIn: 'root' })
export class ClientsService {

  private baseUrl = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) {}

  // RM → get own clients
  getMyClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}/rm`);
  }

  // RM → create client
  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}/rm`, client);
  }

  // RM → get client by ID
  getClientById(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/${id}`);
  }

  // RM → update client
  updateClient(id: string, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.baseUrl}/${id}`, client);
  }
}
