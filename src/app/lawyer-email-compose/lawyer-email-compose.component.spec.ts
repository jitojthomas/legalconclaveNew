import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerEmailComposeComponent } from './lawyer-email-compose.component';

describe('LawyerEmailComposeComponent', () => {
  let component: LawyerEmailComposeComponent;
  let fixture: ComponentFixture<LawyerEmailComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerEmailComposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerEmailComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
