import { Component, OnInit }
                               from '@angular/core';

import { UserSearchComponent } from '../user-search/user-search.component';
import { User }                from '../user/user';

import { UserPermissionsComponent } from '../user-permissions/user-permissions.component';

import { CompanySearchComponent } from '../company-search/company-search.component';
import { Company }              from '../company/company';



@Component({
  selector: 'app-user-security',
  templateUrl: './user-security.component.html',
  styleUrls: ['./user-security.component.css']
})
export class UserSecurityComponent implements OnInit {

  user: User;
  company: Company;
  
  onSelectUser(user:User) {
    this.user = user;
  }

  onSelectCompany(company:Company) {
    this.company = company;
  }
  constructor() { }

  ngOnInit() {
  }

}
