import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatfioComponent } from './platfio.component';

describe('PlatfioComponent', () => {
  let component: PlatfioComponent;
  let fixture: ComponentFixture<PlatfioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatfioComponent]
    });
    fixture = TestBed.createComponent(PlatfioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
