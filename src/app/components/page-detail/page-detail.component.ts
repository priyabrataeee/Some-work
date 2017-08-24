import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Page } from '../page/page';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {

  page: Page;
  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.pageService.getPage(
          +params.get('id')))
        .subscribe(page => this.page = page);
  }

  save(): void {
    this.pageService.update(this.page)
        .then(() => this.goBack());
  }

  delete(page: Page): void {
    this.pageService
        .delete(page.id)
        .then(() => {
          this.location.back();
        });
  }

  goBack(): void {
    this.location.back();
  }
}
