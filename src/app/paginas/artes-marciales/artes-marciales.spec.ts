import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtesMarciales } from './artes-marciales';

describe('ArtesMarciales', () => {
  let component: ArtesMarciales;
  let fixture: ComponentFixture<ArtesMarciales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtesMarciales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtesMarciales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
