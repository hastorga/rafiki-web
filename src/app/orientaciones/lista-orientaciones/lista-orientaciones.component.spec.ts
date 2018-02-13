import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrientacionesComponent } from './lista-orientaciones.component';

describe('ListaOrientacionesComponent', () => {
  let component: ListaOrientacionesComponent;
  let fixture: ComponentFixture<ListaOrientacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOrientacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOrientacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
