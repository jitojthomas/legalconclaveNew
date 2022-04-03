import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerInvoiceComponent } from './lawyer-invoice.component';

describe('LawyerInvoiceComponent', () => {
  let component: LawyerInvoiceComponent;
  let fixture: ComponentFixture<LawyerInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
