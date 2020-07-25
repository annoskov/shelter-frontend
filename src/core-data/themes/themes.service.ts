import {Injectable, OnDestroy} from '@angular/core';
import {DarkTheme, LightTheme, Theme} from './theme';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {TimeTrackingService} from '../../app/core/services/time-tracking.service';
import {takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {UIState} from '../state/feature-states/ui/ui.reducer';
import {ThemeChangeAction} from '../state/feature-states/ui/ui.actions';

@Injectable({
    providedIn: 'root'
})
export class ThemesService implements OnDestroy {

    private themesList: BehaviorSubject<Theme[]> = new BehaviorSubject<Theme[]>([LightTheme, DarkTheme]);
    private activeTheme: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(LightTheme);

    private destroyer$: Subject<boolean> = new Subject<boolean>();

    constructor(private timeTrackingService: TimeTrackingService,
                private store: Store<UIState>) {
    }

    getAvailableThemesList(): Observable<Theme[]> {
        return this.themesList.asObservable();
    }

    getCurrentTheme(): Observable<Theme> {
        return this.activeTheme.asObservable();
    }

    listenTimeChanges() {
        this.timeTrackingService.listenTimeChange()
            .pipe(takeUntil(this.destroyer$))
            .subscribe((hour: number) => {
                const currTheme: Theme = this.activeTheme.getValue();
                if ((hour > 20 || hour < 7) && currTheme.name !== DarkTheme.name) {
                    this.setActiveTheme(DarkTheme);
                } else if (currTheme.name !== LightTheme.name) {
                    this.setActiveTheme(LightTheme);
                }
            });
    }

    setActiveTheme(theme: Theme) {
        Object.keys(theme.properties).forEach((property: string) => {
            document.documentElement.style.setProperty(property, theme.properties[property]);
        });
        this.activeTheme.next(theme);
        this.store.dispatch(new ThemeChangeAction(theme));
    }

    ngOnDestroy() {
        this.destroyer$.next(true);
        this.destroyer$.complete();
    }

}
