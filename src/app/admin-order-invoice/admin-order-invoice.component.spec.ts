import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderInvoiceComponent } from './admin-order-invoice.component';

describe('AdminOrderInvoiceComponent', () => {
  let component: AdminOrderInvoiceComponent;
  let fixture: ComponentFixture<AdminOrderInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrderInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
