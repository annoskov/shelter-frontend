import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {AppThemes, Theme} from '../../theme';

@Component({
    selector: 'slt-theme-picker-toggle',
    templateUrl: './theme-picker-toggle.component.html',
    styleUrls: ['./theme-picker-toggle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemePickerToggleComponent implements OnInit {

    @Input() activeTheme: Theme;
    @Output() toggleThemeEvent: EventEmitter<void> = new EventEmitter<void>();

    appThemes = AppThemes;

    constructor() {
    }

    ngOnInit(): void {
    }

    toggleTheme() {
        this.toggleThemeEvent.emit(null);
    }

}
