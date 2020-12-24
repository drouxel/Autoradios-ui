import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMakersComponent } from './car-makers.component';

describe('CarMakersComponent', () => {
  let component: CarMakersComponent;
  let fixture: ComponentFixture<CarMakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarMakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarMakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
