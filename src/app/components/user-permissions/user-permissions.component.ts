import { Component, Input, OnInit } from '@angular/core';

import { Permission }        from '../permission/permission';
import { PermissionService } from '../../services/permission.service';

import { User }              from '../user/user';
import { UserCompany }           from './user-company';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.css'],
  providers: [PermissionService]
})
export class UserPermissionsComponent implements OnInit {
  companies: UserCompany[]
  
  @Input() user: User;

  constructor(
    private permService: PermissionService
  ) { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.getCompanies();
  }
  getCompanies(): void {
    this.permService
        .getUserCompanies(this.user.id)
        .then(companies => this.companies = companies);
  }

  deleteUserCompany(company: UserCompany): void {
    this.permService
        .delete(company.permission_id)
        .then(() => {
          this.companies = this.companies.filter( c => c.permission_id != company.permission_id);
        });
  }
}
