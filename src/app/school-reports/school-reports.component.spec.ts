import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolReportsComponent } from './school-reports.component';

describe('SchoolReportsComponent', () => {
  let component: SchoolReportsComponent;
  let fixture: ComponentFixture<SchoolReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
