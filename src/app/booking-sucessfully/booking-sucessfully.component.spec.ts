import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSucessfullyComponent } from './booking-sucessfully.component';

describe('BookingSucessfullyComponent', () => {
  let component: BookingSucessfullyComponent;
  let fixture: ComponentFixture<BookingSucessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSucessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingSucessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
