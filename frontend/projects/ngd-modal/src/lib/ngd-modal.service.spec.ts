import { TestBed } from '@angular/core/testing';

import { NgdModalService } from './ngd-modal.service';

describe('NgdModalService', () => {
  let service: NgdModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgdModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
