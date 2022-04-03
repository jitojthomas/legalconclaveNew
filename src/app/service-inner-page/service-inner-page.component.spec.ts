import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInnerPageComponent } from './service-inner-page.component';

describe('ServiceInnerPageComponent', () => {
  let component: ServiceInnerPageComponent;
  let fixture: ComponentFixture<ServiceInnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceInnerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
