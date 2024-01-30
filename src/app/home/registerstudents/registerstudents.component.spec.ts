import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterstudentsComponent } from './registerstudents.component';

describe('RegisterstudentsComponent', () => {
  let component: RegisterstudentsComponent;
  let fixture: ComponentFixture<RegisterstudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterstudentsComponent]
    });
    fixture = TestBed.createComponent(RegisterstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
