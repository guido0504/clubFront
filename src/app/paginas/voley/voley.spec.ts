import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voley } from './voley';

describe('Voley', () => {
  let component: Voley;
  let fixture: ComponentFixture<Voley>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Voley]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Voley);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
