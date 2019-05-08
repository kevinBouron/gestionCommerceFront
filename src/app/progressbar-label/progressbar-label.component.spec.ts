import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarLabelComponent } from './progressbar-label.component';

describe('ProgressbarLabelComponent', () => {
  let component: ProgressbarLabelComponent;
  let fixture: ComponentFixture<ProgressbarLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressbarLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
