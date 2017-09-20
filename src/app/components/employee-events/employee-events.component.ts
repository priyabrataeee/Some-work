import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { Empevent, AssocType, RestOfForm } from './employee-event';
import { MonthendSnapService } from '../../services/monthend-snap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-events',
  templateUrl: './employee-events.component.html',
  styleUrls: ['./employee-events.component.css']
})
export class EmployeeEventsComponent implements OnInit {
  assocType: AssocType[];
  restOfForm: RestOfForm[];

  empevent: FormGroup;
  constructor(
    private fb: FormBuilder,
    private monthendSnapService: MonthendSnapService,
    private router: Router
  ) {
    this.empevent = fb.group(Empevent
    );
  }

  private myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
    indicateInvalidDate: true,
    height: '30px',
    selectionTxtFontSize: '12px'
  };

  private model: Object = { date: { year: 2017, month: 10} };

  getAssocType(): void {
    this.monthendSnapService
        .getAssocType()
        .then(assocType => this.assocType = assocType);
  }

  getRestOfData(): void {
    this.monthendSnapService
    .getOtherFormData()
    .then(restOfForm => this.restOfForm = restOfForm);
  }

  onSubmit(form: any): void {
    const realDate1 = form['onDate1'].formatted;
    const realDate2 = form['onDate2'].formatted;
    form['onDate1'] = realDate1;
    form['onDate2'] = realDate2;
    console.log('you submitted value:', form);
  }

  ngOnInit() {
    this.getAssocType();
    this.getRestOfData();
  }

}
