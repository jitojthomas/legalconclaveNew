import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmailComposeComponent } from './user-email-compose.component';

describe('UserEmailComposeComponent', () => {
  let component: UserEmailComposeComponent;
  let fixture: ComponentFixture<UserEmailComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEmailComposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEmailComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
