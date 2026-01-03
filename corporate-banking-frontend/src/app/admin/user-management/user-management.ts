import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.html',
  styleUrls: ['./user-management.css']
})
export class UserManagementComponent implements OnInit {

  // users list
  users: any[] = [];

  // create user form fields
  username = '';
  email = '';
  password = '';
  role = 'RM';

  // ui state
  showCreateForm = false;
  loading = false;
  error = '';
  success = '';

  private api = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // 🔹 Load all users
  loadUsers(): void {
    this.http.get<any[]>(`${this.api}/users`).subscribe({
      next: res => {
        this.users = res;
      },
      error: () => {
        this.error = 'Failed to load users';
      }
    });
  }

  // 🔹 Show / hide create user form
  toggleCreateForm(): void {
    this.showCreateForm = !this.showCreateForm;
    this.error = '';
    this.success = '';

    // reset form when closing
    if (!this.showCreateForm) {
      this.resetForm();
    }
  }

  // 🔹 Create new user
  createUser(): void {
    this.error = '';
    this.success = '';
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
        this.resetForm();
        this.showCreateForm = false;
        this.loadUsers();
      },
      error: () => {
        this.error = 'User creation failed';
        this.loading = false;
      }
    });
  }

  // 🔹 Enable / Disable user
  toggle(user: any): void {
    this.http.put(
      `${this.api}/users/${user.id}/status?active=${!user.active}`,
      {}
    ).subscribe(() => this.loadUsers());
  }

  // 🔹 Reset form fields
  private resetForm(): void {
    this.username = '';
    this.email = '';
    this.password = '';
    this.role = 'RM';
  }
}
