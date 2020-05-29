import { TestBed } from '@angular/core/testing';

import { JokesDataService } from './jokes-data.service';

describe('JokesDataService', () => {
  let service: JokesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
