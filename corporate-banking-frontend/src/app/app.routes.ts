import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login';
import { RegisterComponent } from './auth/register/register';

import { CreateClientComponent } from './rm/create-client/create-client';
import { ClientListComponent } from './rm/client-list/client-list';
import { EditClientComponent } from './rm/edit-client/edit-client';

import { CreateCreditRequestComponent } from './rm/create-credit-request/create-credit-request';
import { CreditRequestListComponent } from './rm/credit-request-list/credit-request-list';

import { CreditRequestReviewComponent } from './analyst/credit-request-review/credit-request-review';
import { UserManagementComponent } from './admin/user-management/user-management';

import { AuthGuard } from './auth/guards/auth.guard';
import { RoleGuard } from './auth/guards/role.guard';

export const routes: Routes = [

  // 🔹 DEFAULT
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 🔹 PUBLIC ROUTES
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // 🔹 RM ROUTES
  {
    path: 'rm/clients',
    component: ClientListComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['RM'] }
  },
  {
    path: 'rm/create-client',
    component: CreateClientComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['RM'] }
  },
  {
    path: 'rm/edit-client/:id',
    component: EditClientComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['RM'] }
  },
  {
    path: 'rm/create-credit',
    component: CreateCreditRequestComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['RM'] }
  },
  {
    path: 'rm/credit-requests',
    component: CreditRequestListComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['RM'] }
  },

  // 🔹 ANALYST ROUTES
  {
    path: 'analyst/credit-requests',
    component: CreditRequestReviewComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ANALYST'] }
  },

  // 🔹 ADMIN ROUTES
  {
    path: 'admin/users',
    component: UserManagementComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] }
  },

  // 🔹 FALLBACK
  { path: '**', redirectTo: 'login' }
];
