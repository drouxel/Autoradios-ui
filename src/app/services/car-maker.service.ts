import { Injectable } from '@angular/core';
import {CardItem} from '../../assets/context/context.interface';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarMakerService {

  constructor() { }
  public getCarMakersAsCardItems(): CardItem[]
  {
    return[
      {
        id: '1',
        title: 'Alfa Romeo',
        imageSrc: '../../assets/carmaker/Logo_Alfa_Romeo.png'
      },
      {
        id: '2',
        title: 'Audi',
        imageSrc: '../../assets/carmaker/Logo_Audi.jpg'
      },
      {
        id: '3',
        title: 'Bmw',
        imageSrc: '../../assets/carmaker/Logo_Bmw.png'
      },
      {
        id: '4',
        title: 'Chevrolet',
        imageSrc: '../../assets/carmaker/Logo_Chevrolet.jpg'
      }
    ];
  }
}
