import { TestBed } from '@angular/core/testing';

import { HpptInterceptorService } from './hppt.interceptor.service';

describe('HpptInterceptorService', () => {
  let service: HpptInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HpptInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
