import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { Empevent } from './employee-event';

@Component({
  selector: 'app-employee-events',
  templateUrl: './employee-events.component.html',
  styleUrls: ['./employee-events.component.css']
})
export class EmployeeEventsComponent implements OnInit {
  empevent: FormGroup;
  constructor(private fb: FormBuilder) {
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

  onSubmit(form: any): void {
    const realDate1 = form['onDate1'].formatted;
    const realDate2 = form['onDate2'].formatted;
    form['onDate1'] = realDate1;
    form['onDate2'] = realDate2;
    console.log('you submitted value:', form);
  }

  ngOnInit() {
  }

}
