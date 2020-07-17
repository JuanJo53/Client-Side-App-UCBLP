import { TestBed } from '@angular/core/testing';

import { ContenidoModuloService } from './contenido-modulo.service';

describe('ContenidoModuloService', () => {
  let service: ContenidoModuloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenidoModuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
