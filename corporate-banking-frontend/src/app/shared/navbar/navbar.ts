import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  // 🔐 Auth state
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  // 👔 Role helpers
  isRM(): boolean {
    return this.getRole() === 'RM';
  }

  isAnalyst(): boolean {
    return this.getRole() === 'ANALYST';
  }

  isAdmin(): boolean {
    return this.getRole() === 'ADMIN';
  }

  // 🚪 Logout
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
