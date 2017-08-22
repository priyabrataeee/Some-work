import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Company }           from './company';
import { CompanyService }    from '../../services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[];
  selectedCompany: Company;
  newCompany: Company;

  constructor(
    private companyService: CompanyService,
    private router: Router
  ) { }

  getCompanies(): void {
    this.companyService
        .getCompanies()
        .then(companies => this.companies = companies);
  }

  ngOnInit() {
    this.getCompanies();
    this.newCompany = new Company();
  }

  add(company: Company): void {
    this.companyService.create(company)
        .then(company => {
          this.companies.push(company)
          this.selectedCompany = null
        })
  }

  onSelect(company: Company): void {
    this.router.navigate(['/company', company.id])
  }

  gotoDetail(): void {
    this.router.navigate(['/company', this.selectedCompany.id]);
  }
}
