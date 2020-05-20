import {TestBed} from '@angular/core/testing';

import {SideNavStates, SidenavStateService} from './sidenav-state.service';
import {NgZone} from '@angular/core';
import {destroyMock$} from '../../../tests/jest-global-mocks';

describe('SidenavStateService', () => {
    let service: SidenavStateService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = new SidenavStateService(
            new NgZone({})
        );
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('methods', () => {
        it('should return sidenav state', (done: any) => {
            const contextMock: any = {
                sidenav: {
                    get opened() {
                        return true;
                    }
                }
            };
            service.listenScroll(contextMock, destroyMock$).subscribe((value: SideNavStates) => {
                expect(value).toBeDefined();
                done();
            });
        });
    });
});
