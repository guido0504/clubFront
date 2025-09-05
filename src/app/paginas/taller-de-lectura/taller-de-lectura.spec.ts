import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerDeLectura } from './taller-de-lectura';

describe('TallerDeLectura', () => {
  let component: TallerDeLectura;
  let fixture: ComponentFixture<TallerDeLectura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallerDeLectura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallerDeLectura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
