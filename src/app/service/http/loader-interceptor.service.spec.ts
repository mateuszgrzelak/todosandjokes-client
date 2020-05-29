import { TestBed } from '@angular/core/testing';

import { LoadingInterceptorService } from './loader-interceptor.service';

describe('LoadingInterceptorService', () => {
  let service: LoadingInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
