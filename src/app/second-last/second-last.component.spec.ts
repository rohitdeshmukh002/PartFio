import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLastComponent } from './second-last.component';

describe('SecondLastComponent', () => {
  let component: SecondLastComponent;
  let fixture: ComponentFixture<SecondLastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondLastComponent]
    });
    fixture = TestBed.createComponent(SecondLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
