import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { toggleEmitter } from 'src/app/pages/pages.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<toggleEmitter>();

  isSidenavOpen: boolean = true;

  ngOnInit(): void { }

  openSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;

    this.toggleSidenav.emit({
      isToggle: this.isSidenavOpen,
    });
  }
}
