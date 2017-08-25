import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseSecurityComponent } from './database-security.component';

describe('DatabaseSecurityComponent', () => {
  let component: DatabaseSecurityComponent;
  let fixture: ComponentFixture<DatabaseSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
