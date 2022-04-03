import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDiscountCouponComponent } from './admin-add-discount-coupon.component';

describe('AdminAddDiscountCouponComponent', () => {
  let component: AdminAddDiscountCouponComponent;
  let fixture: ComponentFixture<AdminAddDiscountCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddDiscountCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddDiscountCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
