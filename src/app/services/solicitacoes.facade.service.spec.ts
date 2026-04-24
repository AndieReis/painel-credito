import { TestBed } from '@angular/core/testing';

import { SolicitacoesFacadeService } from './solicitacoes.facade';

describe('SolicitacoesFacadeService', () => {
  let service: SolicitacoesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitacoesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
