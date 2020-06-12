import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ThemesService} from '../themes.service';
import {Observable} from 'rxjs';
import {AppThemes, DarkTheme, LightTheme, Theme} from '../theme';

@Component({
    selector: 'slt-theme-picker',
    templateUrl: './theme-picker.component.html',
    styleUrls: ['./theme-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemePickerComponent implements OnInit {

    activeTheme$: Observable<Theme> = this.themeService.getCurrentTheme();

    constructor(private themeService: ThemesService) {
    }

    ngOnInit(): void {
    }

    toggleTheme(currentTheme: Theme) {
        // Temporary
        if (currentTheme.name === AppThemes.Light) {
            this.themeService.setActiveTheme(DarkTheme);
        } else {
            this.themeService.setActiveTheme(LightTheme);
        }
    }

}
