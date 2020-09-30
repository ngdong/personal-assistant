import { TestBed } from '@angular/core/testing';

import { NgdCircularProgressService } from './ngd-circular-progress.service';

describe('NgdCircularProgressService', () => {
  let service: NgdCircularProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgdCircularProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
