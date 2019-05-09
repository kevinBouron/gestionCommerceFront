import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrdreCoupeComponent } from './new-ordre-coupe.component';

describe('NewOrdreCoupeComponent', () => {
  let component: NewOrdreCoupeComponent;
  let fixture: ComponentFixture<NewOrdreCoupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrdreCoupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrdreCoupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
