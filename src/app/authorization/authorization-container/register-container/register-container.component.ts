import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {AuthenticationService} from '../../../core/authentication/authentication.service';
import {IRegisterData} from './register-form/types/register-form.interfaces';

@Component({
    selector: 'app-register-container',
    templateUrl: './register-container.component.html',
    styleUrls: ['./register-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterContainerComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
    }

    onRegisterEvent(registerData: IRegisterData) {
        this.authenticationService.register(registerData);
    }

}
