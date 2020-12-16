import { TestBed } from '@angular/core/testing';

import { MeuLogService } from './meu-log.service';

describe('MeuLogService', () => {
  let service: MeuLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeuLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
