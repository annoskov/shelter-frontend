import {Component} from '@angular/core';
import {ThemesService} from '../core-data/themes/themes.service';

@Component({
    selector: 'slt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Shelter';

    constructor(private themesService: ThemesService) {
        themesService.listenTimeChanges();
    }
}
