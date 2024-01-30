import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradStudentsComponent } from './upgrad-students.component';

describe('UpgradStudentsComponent', () => {
  let component: UpgradStudentsComponent;
  let fixture: ComponentFixture<UpgradStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpgradStudentsComponent]
    });
    fixture = TestBed.createComponent(UpgradStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
