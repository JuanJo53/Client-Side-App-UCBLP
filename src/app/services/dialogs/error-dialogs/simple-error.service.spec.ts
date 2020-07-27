import { TestBed } from '@angular/core/testing';

import { SimpleErrorService } from './simple-error.service';

describe('SimpleErrorService', () => {
  let service: SimpleErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
