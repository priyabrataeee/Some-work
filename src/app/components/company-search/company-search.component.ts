import { Component, OnInit, EventEmitter, Output } 
                             from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { CompanySearchService } from '../../services/company-search.service';
import { Company }              from '../company/company';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css'],
  providers: [CompanySearchService]
})
export class CompanySearchComponent implements OnInit {
  companies: Observable<Company[]>;
  company: Company;

  @Output() onSelectCompany = new EventEmitter<Company>();

  private searchTerms = new Subject<string>();

  constructor(
    private companySearchService: CompanySearchService
  ) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  selectCompany(company){
    this.company = company;
    this.onSelectCompany.emit(company);
  }

  ngOnInit(): void {
    this.companies = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term
          ? this.companySearchService.search(term)
          : Observable.of<Company[]>([]))
        .catch(error => {
          console.log(error);
          return Observable.of<Company[]>([]);
        });
  }

}
