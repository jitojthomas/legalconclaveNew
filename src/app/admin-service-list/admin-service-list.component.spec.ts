import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceListComponent } from './admin-service-list.component';

describe('AdminServiceListComponent', () => {
  let component: AdminServiceListComponent;
  let fixture: ComponentFixture<AdminServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
