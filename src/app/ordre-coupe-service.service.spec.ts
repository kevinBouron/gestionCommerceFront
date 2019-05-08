import { TestBed } from '@angular/core/testing';

import { OrdreCoupeServiceService } from './ordre-coupe-service.service';

describe('OrdreCoupeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdreCoupeServiceService = TestBed.get(OrdreCoupeServiceService);
    expect(service).toBeTruthy();
  });
});
