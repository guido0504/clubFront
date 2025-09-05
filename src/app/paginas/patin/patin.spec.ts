import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patin } from './patin';

describe('Patin', () => {
  let component: Patin;
  let fixture: ComponentFixture<Patin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
