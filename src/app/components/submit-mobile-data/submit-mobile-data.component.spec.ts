import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitMobileDataComponent } from './submit-mobile-data.component';

describe('SubmitMobileDataComponent', () => {
  let component: SubmitMobileDataComponent;
  let fixture: ComponentFixture<SubmitMobileDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitMobileDataComponent]
    });
    fixture = TestBed.createComponent(SubmitMobileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
