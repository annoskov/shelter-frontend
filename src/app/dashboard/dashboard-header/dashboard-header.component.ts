import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'slt-dashboard-header',
    templateUrl: './dashboard-header.component.html',
    styleUrls: ['./dashboard-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
