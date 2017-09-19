import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowUserSearchComponent } from './row-user-search.component';

describe('RowUserSearchComponent', () => {
  let component: RowUserSearchComponent;
  let fixture: ComponentFixture<RowUserSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowUserSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowUserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
