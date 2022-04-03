import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerProfileSettingComponent } from './lawyer-profile-setting.component';

describe('LawyerProfileSettingComponent', () => {
  let component: LawyerProfileSettingComponent;
  let fixture: ComponentFixture<LawyerProfileSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerProfileSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerProfileSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
