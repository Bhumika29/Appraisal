import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListTemplatesComponent } from './display-list-templates.component';

describe('DisplayListTemplatesComponent', () => {
  let component: DisplayListTemplatesComponent;
  let fixture: ComponentFixture<DisplayListTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayListTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
