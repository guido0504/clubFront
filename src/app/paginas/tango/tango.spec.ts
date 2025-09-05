import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tango } from './tango';

describe('Tango', () => {
  let component: Tango;
  let fixture: ComponentFixture<Tango>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tango]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tango);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
