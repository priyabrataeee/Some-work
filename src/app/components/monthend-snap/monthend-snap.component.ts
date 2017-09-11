import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { Mesnap, AssocType, FlsaStatus } from './monthend-snap';
import { MonthendSnapService } from '../../services/monthend-snap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monthend-snap',
  templateUrl: './monthend-snap.component.html',
  styleUrls: ['./monthend-snap.component.css']
})
export class MonthendSnapComponent implements OnInit {
  assocType: AssocType[];
  flsaStatus: FlsaStatus[];

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

  constructor(
    private fb: FormBuilder,
    private monthendSnapService: MonthendSnapService,
    private router: Router
  ) {
    this.mesnap = fb.group(Mesnap);
  }

  getAssocType(): void {
    this.monthendSnapService
        .getAssocType()
        .then(assocType => this.assocType = assocType);
  }

  getFlsaStatus(): void {
    this.monthendSnapService
        .getFlsaStatus()
        .then(flsaStatus => this.flsaStatus = flsaStatus);
  }

  onSubmit(form: any): void {
    form['onDate'] = form['onDate'].formatted;
    console.log('you submitted value:', form);
  }

  // ngOnclickAssoc() {
  //   this.getAssocType();
  // }
  // ngOnclickFlsa() {
  //   this.getFlsaStatus();
  // }

  ngOnInit() {
    this.getAssocType();
    this.getFlsaStatus();
  }

}
