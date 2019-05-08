import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOrdreCoupeComponent } from './liste-ordre-coupe.component';

describe('ListeOrdreCoupeComponent', () => {
  let component: ListeOrdreCoupeComponent;
  let fixture: ComponentFixture<ListeOrdreCoupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeOrdreCoupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeOrdreCoupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
