import { TestBed } from '@angular/core/testing';

import { TipoActividad } from './tipo-actividad';

describe('TipoActividad', () => {
  let service: TipoActividad;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoActividad);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
