import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowUserPermissionsComponent } from './row-user-permissions.component';

describe('RowUserPermissionsComponent', () => {
  let component: RowUserPermissionsComponent;
  let fixture: ComponentFixture<RowUserPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowUserPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowUserPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
