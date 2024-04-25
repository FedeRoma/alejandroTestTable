import { Component, OnInit } from '@angular/core';
import { toggleEmitter } from './pages.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  opened = true;

  ngOnInit(): void { }

  toggleSidenav(event: toggleEmitter) {
    event.isToggle ? this.opened = true : this.opened = false;
  }
}
