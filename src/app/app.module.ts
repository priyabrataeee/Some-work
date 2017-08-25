import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { SSOAuthService} from './sso-authentication/sso-authentication-service';
import { SSOAuthComponent } from './sso-authentication/sso-authentication-component';
import { SSOAuthGuard } from './sso-authentication/sso-authentication-authguard';


import { AppRoutingModule } from './app-routing.module';
import { DatabaseComponent } from './components/database/database.component';
import { DatabaseDetailComponent } from './components/database-detail/database-detail.component';
import { DatabaseService } from './services/database.service';
import { UserSecurityComponent } from './components/user-security/user-security.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { CompanySearchComponent } from './components/company-search/company-search.component';
import { UsersComponent } from './components/user/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserService } from './services/user.service';
import { CompaniesComponent } from './components/company/companies.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyService } from './services/company.service';
import { PageService } from './services/page.service';
import { UserPermissionsComponent } from './components/user-permissions/user-permissions.component';
import { PageSecurityComponent } from './components/page-security/page-security.component';
import { PageSearchComponent } from './components/page-search/page-search.component';
import { PageComponent } from './components/page/page.component';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { DatabaseSecurityComponent } from './components/database-security/database-security.component';
import { DatabaseSearchComponent } from './components/database-search/database-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SSOAuthComponent,
    DatabaseComponent,
    DatabaseDetailComponent,
    UserSecurityComponent,
    UserSearchComponent,
    CompanySearchComponent,
    UsersComponent,
    UserDetailComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    UserPermissionsComponent,
    PageSecurityComponent,
    PageSearchComponent,
    PageComponent,
    PageDetailComponent,
    DatabaseSecurityComponent,
    DatabaseSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    SSOAuthService,
    SSOAuthGuard,
    DatabaseService,
    UserService,
    CompanyService,
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
