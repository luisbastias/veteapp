import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunasPage } from './vacunas.page';

describe('VacunasPage', () => {
  let component: VacunasPage;
  let fixture: ComponentFixture<VacunasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacunasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacunasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
