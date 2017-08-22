import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Company } from '../company/company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.companyService.getCompany(
          +params.get('id')))
        .subscribe(company => this.company = company);
  }

  save(): void {
    this.companyService.update(this.company)
        .then(() => this.goBack());
  }

  delete(company: Company): void {
    this.companyService
        .delete(company.id)
        .then(() => {
          this.location.back();
        })
  }

  goBack(): void {
    this.location.back();
  }
}
