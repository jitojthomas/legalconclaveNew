import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLawyersComponent } from './top-lawyers.component';

describe('TopLawyersComponent', () => {
  let component: TopLawyersComponent;
  let fixture: ComponentFixture<TopLawyersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopLawyersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLawyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
