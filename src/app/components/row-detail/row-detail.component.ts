import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Row } from '../row/row';
import { RowService } from '../../services/row.service';

@Component({
  selector: 'app-row-detail',
  templateUrl: './row-detail.component.html',
  styleUrls: ['./row-detail.component.css']
})
export class RowDetailComponent implements OnInit {

  row: Row;
  constructor(
    private rowService: RowService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.rowService.getRow(
          +params.get('id')))
        .subscribe(row => this.row = row);
  }

  save(): void {
    this.rowService.update(this.row)
        .then(() => this.goBack());
  }

  delete(row: Row): void {
    this.rowService
        .delete(row.id)
        .then(() => {
          this.location.back();
        });
  }

  goBack(): void {
    this.location.back();
  }

}
