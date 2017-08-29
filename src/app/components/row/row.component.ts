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
  row: Row[];
  selectedRow: Row;
  newRow: Row;

  constructor(
    private rowService: RowService,
    private router: Router
  ) { }

  getRows(): void {
    this.rowService
        .getRows()
        .then(row => this.row = row);
  }

  ngOnInit() {
    this.getRows();
    this.newRow = new Row();
  }

  add(row: Row): void {
    this.rowService.create(row)
        .then(row => {
          this.row.push(row);
          this.selectedRow = null;
        });
  }

  onSelect(row: Row): void {
    this.router.navigate(['/row', row.id]);
  }

  gotoDetail(): void {
    this.router.navigate(['/row', this.selectedRow.id]);
  }

}
