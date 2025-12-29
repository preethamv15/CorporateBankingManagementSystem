import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  username = '';
  email = '';
  password = '';
  role = 'RM';

  loading = false;
  error = '';
  success = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  register() {
    this.error = '';
    this.success = '';
    this.loading = true;

    if (!this.username || !this.email || !this.password) {
      this.error = 'All fields are required';
      this.loading = false;
      return;
    }

    this.auth.register(
      this.username,
      this.email,
      this.password,
      this.role
    ).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Registered successfully';
        setTimeout(() => this.router.navigate(['/login']), 1200);
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message || 'Registration failed';
      }
    });
  }
}
