import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateroomComponent } from './allocateroom.component';

describe('AllocateroomComponent', () => {
  let component: AllocateroomComponent;
  let fixture: ComponentFixture<AllocateroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllocateroomComponent]
    });
    fixture = TestBed.createComponent(AllocateroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
