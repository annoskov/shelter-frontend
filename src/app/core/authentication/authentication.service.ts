import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILoginData} from '../../authorization/authorization-container/login-container/login-form/types/login-form.interfaces';
import {IRegisterData} from '../../authorization/authorization-container/register-container/register-form/types/register-form.interfaces';
import {environment} from '../../../environments/environment';

export interface UserData {
    accessToken: string;
}

export interface LoginSuccessResponse {
    isSuccess: boolean;
    accessToken: string;
    message?: string;
    stackTrace?: string;
    statusCode?: number;
}

export interface LoginFailureResponse {
    error: string;
    errorMessage: string;
    statusCode: number;
}

@Injectable()
export class AuthenticationService {

    private AUTH_BASE_URL = `${environment.apiVersion}${environment.authUrl}`;

    constructor(private httpClient: HttpClient) {
    }

    login(loginData: ILoginData) {
        const url = `${this.AUTH_BASE_URL}/login`;
        return this.httpClient.post(url, loginData);
    }

    register(registerData: IRegisterData) {
        const url = `${this.AUTH_BASE_URL}/register`;
        this.httpClient.post(url, registerData);
    }
}
