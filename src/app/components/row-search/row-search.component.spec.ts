import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSearchComponent } from './row-search.component';

describe('RowSearchComponent', () => {
  let component: RowSearchComponent;
  let fixture: ComponentFixture<RowSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
