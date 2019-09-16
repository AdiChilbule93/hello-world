import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexContactComponent } from './flex-contact.component';

describe('FlexContactComponent', () => {
  let component: FlexContactComponent;
  let fixture: ComponentFixture<FlexContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
