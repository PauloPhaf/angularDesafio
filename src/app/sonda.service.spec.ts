import { TestBed, inject } from '@angular/core/testing';

import { SondaService } from './sonda.service';

describe('SondaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SondaService]
    });
  });

  it('should be created', inject([SondaService], (service: SondaService) => {
    expect(service).toBeTruthy();
  }));
});
