import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthorizationHeaderModes} from './authorization-header/authorization-header.types';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AuthorizationState} from '../../../core-data/state/feature-states/authoriazation/authorization.reducer';
import {selectAuthorizationMode} from '../../../core-data/state/feature-states/authoriazation/authorization.selectors';
import {ChangeMode} from '../../../core-data/state/feature-states/authoriazation/authorization.actions';

@Component({
    selector: 'slt-authorization-container',
    templateUrl: './authorization-container.component.html',
    styleUrls: ['./authorization-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorizationContainerComponent implements OnInit {

    mode$: Observable<AuthorizationHeaderModes> = this.store.pipe(select(selectAuthorizationMode));
    authorizationHeaderModes = AuthorizationHeaderModes;

    constructor(private store: Store<AuthorizationState>) {
    }

    ngOnInit(): void {
    }

    changeMode(currentMode: AuthorizationHeaderModes) {
        const newMode: AuthorizationHeaderModes = currentMode === AuthorizationHeaderModes.Login ?
            AuthorizationHeaderModes.Register :
            AuthorizationHeaderModes.Login;
        this.store.dispatch(new ChangeMode(newMode));
    }

}
