import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSubComponent } from './dashboard-sub.component';

describe('DashboardSubComponent', () => {
  let component: DashboardSubComponent;
  let fixture: ComponentFixture<DashboardSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
