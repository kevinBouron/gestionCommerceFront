import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailReglementComponent } from './detail-reglement.component';

describe('DetailReglementComponent', () => {
  let component: DetailReglementComponent;
  let fixture: ComponentFixture<DetailReglementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReglementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
