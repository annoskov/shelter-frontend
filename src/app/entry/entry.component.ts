import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ViewChild,
    AfterViewInit,
    NgZone,
    OnDestroy,
    ElementRef, ChangeDetectorRef
} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Observable, Subject} from 'rxjs';
import {SideNavStates, SidenavStateService} from './services/sidenav-state.service';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryComponent implements OnInit, AfterViewInit, OnDestroy {

    state$: Observable<SideNavStates> = new Observable<SideNavStates>();
    destroy$: Subject<boolean> = new Subject<boolean>();
    sideNavStates = SideNavStates;

    @ViewChild('entryContainer') entryContainer: ElementRef<HTMLDivElement>;
    @ViewChild('sidenav') sidenav: MatSidenav;

    constructor(private sidenavStateService: SidenavStateService) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.state$ = this.sidenavStateService.listenScroll(this, this.destroy$);
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

}
