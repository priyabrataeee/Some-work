import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthendSnapReportComponent } from './monthend-snap-report.component';

describe('MonthendSnapReportComponent', () => {
  let component: MonthendSnapReportComponent;
  let fixture: ComponentFixture<MonthendSnapReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthendSnapReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthendSnapReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
