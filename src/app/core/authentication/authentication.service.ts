import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {ILoginData} from '../../authorization/authorization-container/login-container/login-form/types/login-form.interfaces';
import {IRegisterData} from '../../authorization/authorization-container/register-container/register-form/types/register-form.interfaces';
import {environment} from '../../../environments/environment';
import {Utils} from '../../shared/utils';
import {LoginSuccessAction} from '../../../core-data/state/feature-states/authoriazation/authorization.actions';
import {Router} from '@angular/router';

export interface UserData {
    accessToken: string;
}

export interface LoginSuccessResponse {
    isSuccess: boolean;
    accessToken: string;
    expiresIn: string;
    message?: string;
    stackTrace?: string;
    statusCode?: number;
}

export interface LoginFailureResponse {
    errorMessage: string;
    statusCode: number;
    errorObject: HttpErrorResponse;
}

@Injectable()
export class AuthenticationService {

    private AUTH_BASE_URL = `${environment.apiVersion}${environment.authUrl}`;

    constructor(private httpClient: HttpClient,
                private router: Router) {
    }

    login(loginData: ILoginData) {
        const url = `${this.AUTH_BASE_URL}/login`;
        return this.httpClient.post(url, loginData);
    }

    register(registerData: IRegisterData) {
        const url = `${this.AUTH_BASE_URL}/register`;
        this.httpClient.post(url, registerData);
    }

    saveTokenToStorage(loginSuccessAction: LoginSuccessAction) {
        const storage: Storage = Utils.getStorage();
        storage.setItem('access_token', loginSuccessAction.payload.accessToken);
        storage.setItem('expiresIn', loginSuccessAction.payload.expiresIn);
    }

    navigateToDashboard() {
        this.router.navigate(['/dashboard']);
    }
}
