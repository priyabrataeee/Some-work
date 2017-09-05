import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { Mesnap } from './monthend-snap';

@Component({
  selector: 'app-monthend-snap',
  templateUrl: './monthend-snap.component.html',
  styleUrls: ['./monthend-snap.component.css']
})
export class MonthendSnapComponent implements OnInit {
  mesnap: FormGroup;
  private myDatePickerOptions: IMyDpOptions = {
      dateFormat: 'yyyy/mm',
  };

  private model: Object = { date: { year: 2017, month: 10} };

  constructor(private fb: FormBuilder) {
    this.mesnap = fb.group(Mesnap);
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
