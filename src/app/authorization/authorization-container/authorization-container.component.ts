import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {AuthorizationHeaderModes} from './authorization-header/authorization-header.types';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
    selector: 'app-authorization-container',
    templateUrl: './authorization-container.component.html',
    styleUrls: ['./authorization-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorizationContainerComponent implements OnInit {

    private mode: BehaviorSubject<AuthorizationHeaderModes> = new BehaviorSubject<AuthorizationHeaderModes>(AuthorizationHeaderModes.Login);
    mode$: Observable<AuthorizationHeaderModes> = this.mode.asObservable();

    authorizationHeaderModes = AuthorizationHeaderModes;

    constructor() {
    }

    ngOnInit(): void {
    }

    toggleMode() {
        this.mode.getValue() === AuthorizationHeaderModes.Login ?
            (this.mode.next(AuthorizationHeaderModes.Register)) :
            (this.mode.next(AuthorizationHeaderModes.Login));
    }

}
