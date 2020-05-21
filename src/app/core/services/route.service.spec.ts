import { TestBed } from '@angular/core/testing';
import {Route} from './route.service';


describe('RouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
        Route,
    ]
  }));

  it('should be created', () => {
    const service: Route = TestBed.get(Route);
    expect(service).toBeTruthy();
  });
});
