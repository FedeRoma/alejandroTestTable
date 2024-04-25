import {
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems = signal<Menu[]>([
    {
      id: 1,
      name: 'Items',
      route: '/items',
      icon: 'home',
      hasSubMenu: false,
    },
  ]);

  label = false;

  constructor() { }

  ngOnInit(): void { }
}
