import { TestBed } from '@angular/core/testing';

import { NomeTecService } from './nome-tec.service';

describe('NomeTecService', () => {
  let service: NomeTecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomeTecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
