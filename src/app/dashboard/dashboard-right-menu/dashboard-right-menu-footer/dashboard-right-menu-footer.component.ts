import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'slt-dashboard-right-menu-footer',
  templateUrl: './dashboard-right-menu-footer.component.html',
  styleUrls: ['./dashboard-right-menu-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardRightMenuFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
