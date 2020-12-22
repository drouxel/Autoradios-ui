import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRadioCardComponent } from './car-radio-card.component';

describe('CarRadioCardComponent', () => {
  let component: CarRadioCardComponent;
  let fixture: ComponentFixture<CarRadioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRadioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRadioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
