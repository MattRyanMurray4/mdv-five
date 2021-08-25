import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lift } from '@exercises/api-interfaces';

@Component({
  selector: 'exercises-lifts-list',
  templateUrl: './lifts-list.component.html',
  styleUrls: ['./lifts-list.component.scss'],
})
export class LiftsListComponent {
  @Input() lifts: Lift[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
