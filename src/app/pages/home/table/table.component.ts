import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PeriodicElement } from '../home.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() elements: PeriodicElement[] = [];
  @Output() elementClick: EventEmitter<PeriodicElement> = new EventEmitter<PeriodicElement>();

}
