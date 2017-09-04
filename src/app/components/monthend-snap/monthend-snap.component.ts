import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mesnap } from './monthend-snap';

@Component({
  selector: 'app-monthend-snap',
  templateUrl: './monthend-snap.component.html',
  styleUrls: ['./monthend-snap.component.css']
})
export class MonthendSnapComponent implements OnInit {
  mesnap: FormGroup;
  constructor(private fb: FormBuilder) {
    this.mesnap = fb.group(Mesnap);
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
