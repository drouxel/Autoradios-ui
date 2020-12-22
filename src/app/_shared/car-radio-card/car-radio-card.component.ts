import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CardItem} from '../../../assets/context/context.interface';

@Component({
  selector: 'app-car-radio-card',
  templateUrl: './car-radio-card.component.html',
  styleUrls: ['./car-radio-card.component.scss']
})
export class CarRadioCardComponent implements OnInit {

  @Input() public item: CardItem | undefined;
  @Output() public action = new EventEmitter<string>();

  ngOnInit(): void {
  }

}
