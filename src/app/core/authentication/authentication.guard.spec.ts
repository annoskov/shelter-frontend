import {TestBed, inject} from '@angular/core/testing';

import {AuthenticationGuard} from './authentication.guard';
import {RouterModule} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthenticationGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterModule,
                HttpClientModule,
                RouterTestingModule.withRoutes(
                    []
                )],
            providers: [
                AuthenticationGuard,
                AuthenticationService,
            ],
        });
    });

    it('should ...', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
        expect(guard).toBeTruthy();
    }));
});
