import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {DashboardLeftMenuComponent} from './dashboard-left-menu/dashboard-left-menu.component';
import {DashboardRightMenuComponent} from './dashboard-right-menu/dashboard-right-menu.component';
import {DashboardHeaderComponent} from './dashboard-header/dashboard-header.component';
import {DashboardRightMenuFooterComponent} from './dashboard-right-menu/dashboard-right-menu-footer/dashboard-right-menu-footer.component';
import {DashboardLeftMenuFooterComponent} from './dashboard-left-menu/dashboard-left-menu-footer/dashboard-left-menu-footer.component';
import {ThemesModule} from '../../core-data/themes/themes.module';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardLeftMenuComponent,
        DashboardRightMenuComponent,
        DashboardHeaderComponent,
        DashboardRightMenuFooterComponent,
        DashboardLeftMenuFooterComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        SharedModule,
        ThemesModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule {
}
