import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleblockComponent } from './middleblock.component';

describe('MiddleblockComponent', () => {
  let component: MiddleblockComponent;
  let fixture: ComponentFixture<MiddleblockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiddleblockComponent]
    });
    fixture = TestBed.createComponent(MiddleblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
