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
import { PageComponent } from './components/page/page.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { DatabaseSecurityComponent } from './components/database-security/database-security.component';

import { RowSecurityComponent } from './components/row-security/row-security.component';
import { RowComponent } from './components/row/row.component';
import { RowDetailComponent } from './components/row-detail/row-detail.component';

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
  { path: 'databaseSecurity', component: DatabaseSecurityComponent },
  { path: 'pageSecurity', component: PageSecurityComponent },
  { path: 'pages', component: PageComponent },
  { path: 'page/:id', component: PageDetailComponent},
  { path: 'rowSecurity', component: RowSecurityComponent},
  { path: 'rows', component: RowComponent},
  { path: 'row/:id', component: RowDetailComponent},
  { path: '**', redirectTo: 'app-sso-auth-component' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
