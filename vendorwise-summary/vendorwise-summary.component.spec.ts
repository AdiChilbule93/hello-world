import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorwiseSummaryComponent } from './vendorwise-summary.component';

describe('VendorwiseSummaryComponent', () => {
  let component: VendorwiseSummaryComponent;
  let fixture: ComponentFixture<VendorwiseSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorwiseSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorwiseSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
