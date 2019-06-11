import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSub1Component } from './dashboard-sub1.component';

describe('DashboardSub1Component', () => {
  let component: DashboardSub1Component;
  let fixture: ComponentFixture<DashboardSub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSub1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
