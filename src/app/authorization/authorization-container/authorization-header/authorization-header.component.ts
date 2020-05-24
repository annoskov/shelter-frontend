import {Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';
import {AuthorizationHeaderModes} from './authorization-header.types';

@Component({
    selector: 'slt-authorization-header',
    templateUrl: './authorization-header.component.html',
    styleUrls: ['./authorization-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorizationHeaderComponent implements OnInit {

    @Input() mode: AuthorizationHeaderModes = AuthorizationHeaderModes.Login;

    @Output() toggleModeEvent: EventEmitter<void> = new EventEmitter<void>();

    authorizationHeaderModes = AuthorizationHeaderModes;

    constructor() {
    }

    ngOnInit(): void {
    }

    toggleMode() {
        this.toggleModeEvent.emit();
    }

}
