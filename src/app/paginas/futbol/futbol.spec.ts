import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Futbol } from './futbol';

describe('Futbol', () => {
  let component: Futbol;
  let fixture: ComponentFixture<Futbol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Futbol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Futbol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
