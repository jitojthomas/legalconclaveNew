import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerChatWidgetComponent } from './lawyer-chat-widget.component';

describe('LawyerChatWidgetComponent', () => {
  let component: LawyerChatWidgetComponent;
  let fixture: ComponentFixture<LawyerChatWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawyerChatWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerChatWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
