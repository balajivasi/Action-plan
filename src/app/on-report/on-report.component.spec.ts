import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnReportComponent } from './on-report.component';

describe('OnReportComponent', () => {
  let component: OnReportComponent;
  let fixture: ComponentFixture<OnReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
