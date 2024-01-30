import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGradeComponent } from './add-grade.component';

describe('AddGradeComponent', () => {
  let component: AddGradeComponent;
  let fixture: ComponentFixture<AddGradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGradeComponent]
    });
    fixture = TestBed.createComponent(AddGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
