import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  username = '';
  password = '';

  loading = false;
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    this.error = '';
    this.loading = true;

    if (!this.username || !this.password) {
      this.error = 'Username and password are required';
      this.loading = false;
      return;
    }

    this.auth.login(this.username, this.password).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);

        if (res.role === 'ADMIN') {
          this.router.navigate(['/admin/users']);
        } else if (res.role === 'ANALYST') {
          this.router.navigate(['/analyst/credit-requests']);
        } else {
          this.router.navigate(['/rm/clients']);
        }

        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message || 'Invalid username or password';
        localStorage.clear();
      }
    });
  }
}
