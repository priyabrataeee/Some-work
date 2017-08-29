import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSecurityComponent } from './row-security.component';

describe('RowSecurityComponent', () => {
  let component: RowSecurityComponent;
  let fixture: ComponentFixture<RowSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
