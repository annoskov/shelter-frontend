import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'slt-dashboard-left-menu',
  templateUrl: './dashboard-left-menu.component.html',
  styleUrls: ['./dashboard-left-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLeftMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
