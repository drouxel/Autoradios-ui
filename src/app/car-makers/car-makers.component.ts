import { Component, OnInit } from '@angular/core';
import {CardItem} from '../../assets/context/context.interface';

@Component({
  selector: 'app-car-makers',
  templateUrl: './car-makers.component.html',
  styleUrls: ['./car-makers.component.scss']
})
export class CarMakersComponent implements OnInit {
  public items: CardItem[];
  constructor() {
    this.items = [
      {
        id: '1',
        title: 'Alfa Romeo',
        imageSrc: '../../assets/carmaker/Logo_Alfa_Romeo.png'
      }
    ];
  }

  ngOnInit(): void {
    console.log(this.items);
  }

}
