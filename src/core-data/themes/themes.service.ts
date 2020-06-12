import {Injectable} from '@angular/core';
import {DarkTheme, LightTheme, Theme} from './theme';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemesService {

    private themesList: BehaviorSubject<Theme[]> = new BehaviorSubject<Theme[]>([LightTheme, DarkTheme]);
    private activeTheme: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(LightTheme);

    constructor() {
    }

    getAvailableThemesList(): Observable<Theme[]> {
        return this.themesList.asObservable();
    }

    getCurrentTheme(): Observable<Theme> {
        return this.activeTheme.asObservable();
    }

    setActiveTheme(theme: Theme) {
        Object.keys(theme.properties).forEach((property: string) => {
            document.documentElement.style.setProperty(property, theme.properties[property]);
        });
        this.activeTheme.next(theme);
    }
}
