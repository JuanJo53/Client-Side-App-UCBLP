import { TestBed } from '@angular/core/testing';

import { PracticesService } from './practices.service';

describe('PracticesService', () => {
  let service: PracticesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
