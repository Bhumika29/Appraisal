import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueAppraisalComponent } from './due-appraisal.component';

describe('DueAppraisalComponent', () => {
  let component: DueAppraisalComponent;
  let fixture: ComponentFixture<DueAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
