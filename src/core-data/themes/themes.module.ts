import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemePickerComponent} from './theme-picker/theme-picker.component';
import {ThemePickerToggleComponent} from './theme-picker/theme-picker-toggle/theme-picker-toggle.component';
import {MaterialModule} from '../../app/shared/material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [ThemePickerComponent, ThemePickerToggleComponent],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
    ],
    exports: [
        ThemePickerComponent,
    ]
})
export class ThemesModule {
}
