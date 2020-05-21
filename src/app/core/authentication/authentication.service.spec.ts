import {TestBed} from '@angular/core/testing';

import {AuthenticationService} from './authentication.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('AuthenticationService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [AuthenticationService],
    }));

    it('should be created', () => {
        const service: AuthenticationService = TestBed.inject(AuthenticationService);
        expect(service).toBeTruthy();
    });
});
