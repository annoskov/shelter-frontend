import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILoginData} from '../../authorization/authorization-container/login-container/login-form/types/login-form.interfaces';

@Injectable()
export class AuthenticationService {

    constructor(private httpClient: HttpClient) {
    }

    login(loginData: ILoginData) {
        console.log('loginData:', loginData);
    }
}
