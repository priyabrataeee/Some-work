import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthendSnapComponent } from './monthend-snap.component';

describe('MonthendSnapComponent', () => {
  let component: MonthendSnapComponent;
  let fixture: ComponentFixture<MonthendSnapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthendSnapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthendSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
