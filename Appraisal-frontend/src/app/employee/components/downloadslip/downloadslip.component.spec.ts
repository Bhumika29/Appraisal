import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadslipComponent } from './downloadslip.component';

describe('DownloadslipComponent', () => {
  let component: DownloadslipComponent;
  let fixture: ComponentFixture<DownloadslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
