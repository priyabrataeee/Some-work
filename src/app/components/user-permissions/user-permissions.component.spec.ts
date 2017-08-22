import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPermissionsComponent } from './user-permissions.component';

describe('UserPermissionsComponent', () => {
  let component: UserPermissionsComponent;
  let fixture: ComponentFixture<UserPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
