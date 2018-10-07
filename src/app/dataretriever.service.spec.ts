import { TestBed } from '@angular/core/testing';

import { DataretrieverService } from './dataretriever.service';

describe('DataretrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataretrieverService = TestBed.get(DataretrieverService);
    expect(service).toBeTruthy();
  });
});
