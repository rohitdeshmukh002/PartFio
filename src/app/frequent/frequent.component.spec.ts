import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentComponent } from './frequent.component';

describe('FrequentComponent', () => {
  let component: FrequentComponent;
  let fixture: ComponentFixture<FrequentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrequentComponent]
    });
    fixture = TestBed.createComponent(FrequentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
