import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReferEarnComponent } from './user-refer-earn.component';

describe('UserReferEarnComponent', () => {
  let component: UserReferEarnComponent;
  let fixture: ComponentFixture<UserReferEarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReferEarnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReferEarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
