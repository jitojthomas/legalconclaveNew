import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerReviewComponent } from './lawyer-review.component';

describe('LawyerReviewComponent', () => {
  let component: LawyerReviewComponent;
  let fixture: ComponentFixture<LawyerReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
