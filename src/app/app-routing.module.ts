import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';


import { UserSecurityComponent } from './components/user-security/user-security.component';

import { SSOAuthGuard } from './sso-authentication/sso-authentication-authguard';
import { SSOAuthComponent } from './sso-authentication/sso-authentication-component';

import {UsersComponent } from './components/user/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

import {CompaniesComponent } from './components/company/companies.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';

import { DatabaseComponent } from './components/database/database.component';
import { DatabaseDetailComponent } from './components/database-detail/database-detail.component';

import { PageSecurityComponent } from './components/page-security/page-security.component';

const routes: Routes = [
  { path: 'app-sso-auth-component', component: SSOAuthComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', canActivate: [SSOAuthGuard], component: DashboardComponent },
  { path: 'security', canActivate: [SSOAuthGuard], component: UserSecurityComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'user', component: UsersComponent },
  { path: 'company/:id', component: CompanyDetailComponent },
  { path: 'company', component: CompaniesComponent },
  { path: 'database/:id', component: DatabaseDetailComponent },
  { path: 'database', component: DatabaseComponent },
  { path: 'pageSecurity', component: PageSecurityComponent },
  { path: '**', redirectTo: 'app-sso-auth-component' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
