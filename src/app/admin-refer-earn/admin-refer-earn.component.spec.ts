import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReferEarnComponent } from './admin-refer-earn.component';

describe('AdminReferEarnComponent', () => {
  let component: AdminReferEarnComponent;
  let fixture: ComponentFixture<AdminReferEarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReferEarnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReferEarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
