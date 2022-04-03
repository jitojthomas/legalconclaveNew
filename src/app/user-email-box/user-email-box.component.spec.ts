import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmailBoxComponent } from './user-email-box.component';

describe('UserEmailBoxComponent', () => {
  let component: UserEmailBoxComponent;
  let fixture: ComponentFixture<UserEmailBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEmailBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEmailBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
