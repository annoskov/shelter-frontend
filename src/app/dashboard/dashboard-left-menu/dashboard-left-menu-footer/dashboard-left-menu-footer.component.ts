import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'slt-dashboard-left-menu-footer',
  templateUrl: './dashboard-left-menu-footer.component.html',
  styleUrls: ['./dashboard-left-menu-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLeftMenuFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
