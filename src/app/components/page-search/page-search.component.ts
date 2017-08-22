import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { PageSearchService } from '../../services/page-search.service';
import { Page } from '../page/page';



@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.css'],
  providers: [PageSearchService]
})
export class PageSearchComponent implements OnInit {

  pages: Observable<Page[]>;
  page: Page;

  @Output() onSelectPage = new EventEmitter<Page>();

  private searchTerms = new Subject<string>();

  constructor(
    private pageSearchService: PageSearchService
  ) { }

  search(term: string) {
    this.searchTerms.next(term);
  }

  selectPage(page){
    this.page = page;
    this.onSelectPage.emit(page);
  }

  ngOnInit(): void {
    this.pages = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term
          ? this.pageSearchService.search(term)
          : Observable.of<Page[]>([]))
        .catch(error => {
          console.log(error);
          return Observable.of<Page[]>([]);
        });
  }

}
