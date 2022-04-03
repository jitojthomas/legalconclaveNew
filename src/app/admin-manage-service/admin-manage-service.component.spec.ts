import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageServiceComponent } from './admin-manage-service.component';

describe('AdminManageServiceComponent', () => {
  let component: AdminManageServiceComponent;
  let fixture: ComponentFixture<AdminManageServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
