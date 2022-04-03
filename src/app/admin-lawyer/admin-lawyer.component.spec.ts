import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLawyerComponent } from './admin-lawyer.component';

describe('AdminLawyerComponent', () => {
  let component: AdminLawyerComponent;
  let fixture: ComponentFixture<AdminLawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLawyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
