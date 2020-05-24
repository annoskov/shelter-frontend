import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ViewChild,
    AfterViewInit,
    OnDestroy,
    ElementRef
} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Observable, Subject} from 'rxjs';
import {SideNavStates, SidenavStateService} from './services/sidenav-state.service';

@Component({
    selector: 'slt-login-window',
    templateUrl: './login-window.component.html',
    styleUrls: ['./login-window.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginWindowComponent implements OnInit, AfterViewInit, OnDestroy {

    sidenavState$: Observable<SideNavStates> = new Observable<SideNavStates>();
    destroy$: Subject<boolean> = new Subject<boolean>();
    sideNavStates = SideNavStates;

    @ViewChild('entryContainer') entryContainer: ElementRef<HTMLDivElement>;
    @ViewChild('sidenav') sidenav: MatSidenav;

    constructor(private sidenavStateService: SidenavStateService) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.sidenavState$ = this.sidenavStateService.listenScroll(this, this.destroy$);
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

}
