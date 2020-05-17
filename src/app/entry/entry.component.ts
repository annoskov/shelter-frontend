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
import {Subject} from 'rxjs';
import {SidenavStateService} from './services/sidenav-state.service';

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryComponent implements OnInit, AfterViewInit, OnDestroy {

    destroy$: Subject<boolean> = new Subject<boolean>();
    @ViewChild('entryContainer') entryContainer: ElementRef<HTMLDivElement>;
    @ViewChild('sidenav') sidenav: MatSidenav;

    constructor(private ngZone: NgZone,
                private cdr: ChangeDetectorRef,
                private sidenavStateService: SidenavStateService) {
    }

    ngOnInit(): void {

    }

    ngAfterViewInit() {
        this.sidenavStateService.listenScroll(this.openSideNav, this.closeSideNav, this, this.destroy$);
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    openSideNav() {
        this.sidenav.open();
        this.cdr.detectChanges();
    }

    closeSideNav() {
        this.sidenav.close();
        this.cdr.detectChanges();
    }

}
