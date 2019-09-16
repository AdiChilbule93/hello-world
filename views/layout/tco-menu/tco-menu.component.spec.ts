import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoMenuComponent } from './tco-menu.component';

describe('TcoMenuComponent', () => {
  let component: TcoMenuComponent;
  let fixture: ComponentFixture<TcoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
