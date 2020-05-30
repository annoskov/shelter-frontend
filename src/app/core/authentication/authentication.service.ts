import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILoginData} from '../../authorization/authorization-container/login-container/login-form/types/login-form.interfaces';
import {IRegisterData} from '../../authorization/authorization-container/register-container/register-form/types/register-form.interfaces';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthenticationService {

    private AUTH_BASE_URL = `${environment.apiVersion}${environment.authUrl}`;

    constructor(private httpClient: HttpClient) {
    }

    login(loginData: ILoginData) {
        const url = `http://localhost:3000/${this.AUTH_BASE_URL}/login`;
        return this.httpClient.post(url, loginData);
    }

    register(registerData: IRegisterData) {
        const url = `${this.AUTH_BASE_URL}/register`;
        this.httpClient.post(url, registerData);
    }
}
