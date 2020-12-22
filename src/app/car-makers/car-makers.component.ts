import { Component, OnInit } from '@angular/core';
import {CardItem} from '../../assets/context/context.interface';
import {CarMakerService} from '../services/car-maker.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-car-makers',
  templateUrl: './car-makers.component.html',
  styleUrls: ['./car-makers.component.scss']
})
export class CarMakersComponent implements OnInit {
  public items: CardItem[];
  constructor(
    private carMakerService: CarMakerService
  ) {
    this.items = this.carMakerService.getCarMakersAsCardItems();
  }

  ngOnInit(): void {

  }

}
