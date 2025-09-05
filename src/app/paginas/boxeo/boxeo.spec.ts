import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxeo } from './boxeo';

describe('Boxeo', () => {
  let component: Boxeo;
  let fixture: ComponentFixture<Boxeo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boxeo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boxeo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
