import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  isOpened = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isOpened = !this.isOpened;
  }

}
