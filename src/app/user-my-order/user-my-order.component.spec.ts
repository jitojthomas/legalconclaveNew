import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyOrderComponent } from './user-my-order.component';

describe('UserMyOrderComponent', () => {
  let component: UserMyOrderComponent;
  let fixture: ComponentFixture<UserMyOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMyOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
