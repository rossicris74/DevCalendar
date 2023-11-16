import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCalendarComponent } from './dev-calendar.component';

describe('DevCalendarComponent', () => {
  let component: DevCalendarComponent;
  let fixture: ComponentFixture<DevCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevCalendarComponent]
    });
    fixture = TestBed.createComponent(DevCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
