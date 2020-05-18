import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ILoginData} from './login-form/types/login-form.interfaces';
import {AuthenticationService} from '../../../core/authentication/authentication.service';

@Component({
    selector: 'app-login-container',
    templateUrl: './login-container.component.html',
    styleUrls: ['./login-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
    }

    onLoginEvent(loginData: ILoginData) {
        this.authenticationService.login(loginData);
    }

}
