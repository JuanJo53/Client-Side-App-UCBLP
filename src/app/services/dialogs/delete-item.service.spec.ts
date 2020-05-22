import { TestBed } from '@angular/core/testing';

import { DeleteItemService } from './delete-item.service';

describe('DeleteItemService', () => {
  let service: DeleteItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
