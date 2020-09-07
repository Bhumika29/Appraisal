import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyAppraisalComponent } from './apply-appraisal.component';

describe('ApplyAppraisalComponent', () => {
  let component: ApplyAppraisalComponent;
  let fixture: ComponentFixture<ApplyAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
