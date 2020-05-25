import { TestBed } from '@angular/core/testing';

import { MyClassService } from './my-class.service';

describe('MyClassService', () => {
  let service: MyClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
