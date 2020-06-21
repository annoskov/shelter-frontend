import {Inject, Injectable, NgZone, OnDestroy} from '@angular/core';
import {BehaviorSubject, interval, Observable, Subject, timer} from 'rxjs';
import {distinctUntilChanged, filter, map, takeUntil} from 'rxjs/operators';

export enum TimeChangeSteps {
    'Milliseconds' = 'Milliseconds',
    'Seconds' = 'Seconds',
    'Minutes' = 'Minutes',
    'Hours' = 'Hours',
    'Days' = 'Days',
    'Months' = 'Months',
}

const TimeCheckTickTime = 1000;

@Injectable({
    providedIn: 'root'
})
export class TimeTrackingService implements OnDestroy {

    private destroyer$: Subject<boolean> = new Subject<boolean>();

    constructor(private zone: NgZone) {
    }

    private static getCurrentDateValueByStep(step: TimeChangeSteps): number | null {
        // Without timezones. Be careful
        switch (step) {
            case TimeChangeSteps.Milliseconds: {
                return new Date().getTime();
            }
            case TimeChangeSteps.Seconds: {
                return new Date().getSeconds();
            }
            case TimeChangeSteps.Minutes: {
                return new Date().getMinutes();
            }
            case TimeChangeSteps.Hours: {
                return new Date().getHours();
            }
            case TimeChangeSteps.Days: {
                return new Date().getDate();
            }
            case TimeChangeSteps.Months: {
                return new Date().getMonth() + 1;
            }
            default: {
                return null;
            }
        }
    }

    listenTimeChange(step: TimeChangeSteps = TimeChangeSteps.Hours) {
        const returnedSubject$: Subject<number> = new Subject<number>();

        this.zone.runOutsideAngular(() => {
            interval(TimeCheckTickTime)
                .pipe(
                    takeUntil(this.destroyer$),
                    map(() => TimeTrackingService.getCurrentDateValueByStep(step)),
                    filter(Boolean),
                    distinctUntilChanged(),
                )
                .subscribe((newTimeValue: number) => {
                    this.zone.run(() => {
                        returnedSubject$.next(newTimeValue);
                    });
                });
        });

        return returnedSubject$.asObservable();
    }

    ngOnDestroy() {
        this.destroyer$.next(true);
        this.destroyer$.complete();
    }


}
