import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerEmailBoxComponent } from './lawyer-email-box.component';

describe('LawyerEmailBoxComponent', () => {
  let component: LawyerEmailBoxComponent;
  let fixture: ComponentFixture<LawyerEmailBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerEmailBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerEmailBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
