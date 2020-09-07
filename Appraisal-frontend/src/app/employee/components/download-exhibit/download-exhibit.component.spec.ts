import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadExhibitComponent } from './download-exhibit.component';

describe('DownloadExhibitComponent', () => {
  let component: DownloadExhibitComponent;
  let fixture: ComponentFixture<DownloadExhibitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadExhibitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadExhibitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
