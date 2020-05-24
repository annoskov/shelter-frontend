import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'slt-dashboard-right-menu',
  templateUrl: './dashboard-right-menu.component.html',
  styleUrls: ['./dashboard-right-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardRightMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
