import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { menuItems } from './main-menu-items';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

export interface MenuItem {
  name: string;
  isActive: boolean;
  link: string;
  iconClass: string;
}

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent implements OnInit {

  @Input() isMenuOpened: boolean;

  menuItems$: Observable<MenuItem[]>;

  constructor(private router: Router) {
    this.menuItems$ = of(menuItems);
  }

  ngOnInit() {
  }

  onMenuItemClick(link: string) {
    this.router.navigate([`${link}`], { replaceUrl: true });
  }

}
