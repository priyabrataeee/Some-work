import { Component, OnInit } from '@angular/core';

import { MonthendSnapReportService } from '../../services/monthend-snap-report.service';
import { MonthendReport } from './monthend-report';

@Component({
  selector: 'app-monthend-snap-report',
  templateUrl: './monthend-snap-report.component.html',
  styleUrls: ['./monthend-snap-report.component.css']
})
export class MonthendSnapReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
