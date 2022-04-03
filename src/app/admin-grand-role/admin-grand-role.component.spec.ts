import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGrandRoleComponent } from './admin-grand-role.component';

describe('AdminGrandRoleComponent', () => {
  let component: AdminGrandRoleComponent;
  let fixture: ComponentFixture<AdminGrandRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGrandRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGrandRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
