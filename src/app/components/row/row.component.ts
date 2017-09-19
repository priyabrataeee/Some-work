import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Row } from './row';
import { RowService } from '../../services/row.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  rows: Row[];
  selectedRow: Row;
  newRow: Row;

  constructor(
    private rowService: RowService,
    private router: Router
  ) { }

  getRows(): void {
    this.rowService
        .getRows()
        .then(rows => this.rows = rows);
  }

  ngOnInit() {
    this.getRows();
    this.newRow = new Row();
  }

  add(row: Row): void {
    this.rowService.create(row)
        .then(row => {
          this.rows.push(row);
          this.selectedRow = null;
        });
    let inputs = <HTMLInputElement[]><any>document.getElementsByTagName('input');
    inputs[0].value = '';
    inputs[1].value = '';
  }

  onSelect(row: Row): void {
    this.router.navigate(['/row', row.id]);
  }

  gotoDetail(): void {
    this.router.navigate(['/row', this.selectedRow.id]);
  }

}
