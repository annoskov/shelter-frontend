import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject, fromEvent, Subject} from 'rxjs';
import {distinctUntilChanged, filter, map, startWith, takeUntil} from 'rxjs/operators';
import {EntryComponent} from '../entry.component';


export enum SideNavStates {
    'Open',
    'Close'
}

@Injectable({
    providedIn: 'root'
})
export class SidenavStateService {

    constructor(private ngZone: NgZone) {
    }

    public listenScroll(context: EntryComponent, destroyer$: Subject<boolean>) {
        const subj$: BehaviorSubject<SideNavStates> = new BehaviorSubject<SideNavStates>(SideNavStates.Close);
        this.ngZone.runOutsideAngular(() => {
            fromEvent(window, 'scroll')
                .pipe(
                    takeUntil(destroyer$),
                    startWith(true),
                    map(() => window.pageYOffset > 350 ? SideNavStates.Close : SideNavStates.Open),
                    filter((state: SideNavStates) =>
                        state === SideNavStates.Open && !context.sidenav.opened ||
                        state === SideNavStates.Close && context.sidenav.opened
                    ),
                    distinctUntilChanged(),
                )
                .subscribe((state: SideNavStates) => this.ngZone.run(() => subj$.next(state)));
        });
        return subj$.asObservable();
    }

}
