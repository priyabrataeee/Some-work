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
  today = new Date();
  dd = this.today.getDate() + 1;
  mm = this.today.getMonth() + 1;
  yyyy = this.today.getFullYear();
  disableDate = {year: this.yyyy, month: this.mm, day: this.dd};
  private myDatePickerOptions: IMyDpOptions = {
      dateFormat: 'yyyy/mm',
      indicateInvalidDate: true,
      disableSince: this.disableDate,
      height: '30px',
      selectionTxtFontSize: '12px'
  };

  constructor(private fb: FormBuilder) {
    this.mesnap = fb.group(Mesnap);
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    form['onDate'] = form['onDate'].formatted;
    console.log('you submitted value:', form);
  }

}
