import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CardItem} from '../../../assets/context/context.interface';

@Component({
  selector: 'app-car-radio-card',
  templateUrl: './car-radio-card.component.html',
  styleUrls: ['./car-radio-card.component.scss']
})
export class CarRadioCardComponent  {

  @Input()
  public item!: CardItem;
  @Output() public action = new EventEmitter<string>();

  constructor() {}


  public submitAction(id: string): void
  {
    this.action.next(id);
  }
}
