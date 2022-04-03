import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerChangePasswordComponent } from './lawyer-change-password.component';

describe('LawyerChangePasswordComponent', () => {
  let component: LawyerChangePasswordComponent;
  let fixture: ComponentFixture<LawyerChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
