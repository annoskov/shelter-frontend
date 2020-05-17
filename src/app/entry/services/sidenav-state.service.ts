import {Injectable, NgZone} from '@angular/core';
import {ElementScrollPercentageService} from '../../../services/element-scroll-percentage.service';
import {fromEvent, Subject} from 'rxjs';
import {distinctUntilChanged, filter, map, startWith, takeUntil} from 'rxjs/operators';
import {EntryComponent} from '../entry.component';


enum SideNavState {
    'Open',
    'Close'
}

@Injectable({
    providedIn: 'root'
})
export class SidenavStateService {

    constructor(private ngZone: NgZone,
                private elementScrollPercentageService: ElementScrollPercentageService) {
    }

    public listenScroll(openSideNavFn: () => void, closeSideNavFn: () => void, context: EntryComponent, destroyer$: Subject<boolean>) {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(window, 'scroll')
                .pipe(
                    takeUntil(destroyer$),
                    startWith(true),
                    map(() => {
                        const currentScrollPercentage: number = this.elementScrollPercentageService.getScroll(document);
                        return currentScrollPercentage > 40 ? SideNavState.Close : SideNavState.Open;
                    }),
                    filter((state: SideNavState) =>
                        state === SideNavState.Open && !context.sidenav.opened ||
                        state === SideNavState.Close && context.sidenav.opened
                    ),
                    distinctUntilChanged(),
                )
                .subscribe((state: SideNavState) => {
                    this.ngZone.run(() => {
                        if (state === SideNavState.Open) {
                            openSideNavFn.call(context);
                        } else {
                            closeSideNavFn.call(context);
                        }
                    });
                });
        });
    }

}
