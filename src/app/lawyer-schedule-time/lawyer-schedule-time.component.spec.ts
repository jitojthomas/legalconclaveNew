import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerScheduleTimeComponent } from './lawyer-schedule-time.component';

describe('LawyerScheduleTimeComponent', () => {
  let component: LawyerScheduleTimeComponent;
  let fixture: ComponentFixture<LawyerScheduleTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerScheduleTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerScheduleTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
