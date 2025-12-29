import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.html'
})
export class UserManagementComponent implements OnInit {

  users: any[] = [];

  username = '';
  email = '';
  password = '';
  role = 'RM';

  loading = false;
  error = '';
  success = '';

  private api = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // 🔹 FETCH USERS
  loadUsers() {
    this.http.get<any[]>(`${this.api}/users`).subscribe({
      next: res => this.users = res,
      error: () => this.error = 'Failed to load users'
    });
  }

  // 🔹 CREATE USER
  createUser() {
    this.loading = true;

    this.http.post(`${this.api}/users`, {
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role,
      active: true
    }).subscribe({
      next: () => {
        this.success = 'User created successfully';
        this.loading = false;
        this.username = '';
        this.email = '';
        this.password = '';
        this.role = 'RM';
        this.loadUsers();
      },
      error: () => {
        this.error = 'User creation failed';
        this.loading = false;
      }
    });
  }

  // 🔹 ENABLE / DISABLE
  toggle(user: any) {
    this.http.put(
      `${this.api}/users/${user.id}/status?active=${!user.active}`,
      {}
    ).subscribe(() => this.loadUsers());
  }
}
