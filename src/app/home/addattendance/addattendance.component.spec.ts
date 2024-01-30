import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddattendanceComponent } from './addattendance.component';

describe('AddattendanceComponent', () => {
  let component: AddattendanceComponent;
  let fixture: ComponentFixture<AddattendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddattendanceComponent]
    });
    fixture = TestBed.createComponent(AddattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
