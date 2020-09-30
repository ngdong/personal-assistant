import { TestBed } from '@angular/core/testing';

import { NgdIconsRegistry } from './ngd-icons-registry.service';

describe('NgdIconsRegistry', () => {
  let service: NgdIconsRegistry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgdIconsRegistry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
