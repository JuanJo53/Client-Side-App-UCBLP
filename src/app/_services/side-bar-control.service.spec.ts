import { TestBed } from '@angular/core/testing';

import { SideBarControlService } from './side-bar-control.service';

describe('SideBarControlService', () => {
  let service: SideBarControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideBarControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
