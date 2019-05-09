import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOrdreCoupeComponent } from './detail-ordre-coupe.component';

describe('DetailOrdreCoupeComponent', () => {
  let component: DetailOrdreCoupeComponent;
  let fixture: ComponentFixture<DetailOrdreCoupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOrdreCoupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOrdreCoupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
