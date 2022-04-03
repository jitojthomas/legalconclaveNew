import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatConsultationComponent } from './chat-consultation.component';

describe('ChatConsultationComponent', () => {
  let component: ChatConsultationComponent;
  let fixture: ComponentFixture<ChatConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
