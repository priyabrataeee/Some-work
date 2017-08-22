import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Page } from './page';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  pages: Page[];
  selectedPage: Page;
  newPage: Page;

  constructor(
    private pageService: PageService,
    private router: Router
  ) { }

  getPages(): void {
    this.pageService
        .getPages()
        .then(pages => this.pages = pages);
  }

  ngOnInit() {
    this.getPages();
    this.newPage = new Page();
  }

  add(page: Page): void {
    this.pageService.create(page)
        .then(page => {
          this.pages.push(page);
          this.selectedPage = null;
        });
  }

  onSelect(page: Page): void {
    this.router.navigate(['/page', page.id]);
  }

  gotoDetail(): void {
    this.router.navigate(['/page', this.selectedPage.id]);
  }

}
