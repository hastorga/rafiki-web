import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrientacionComponent } from './detalle-orientacion.component';

describe('DetalleOrientacionComponent', () => {
  let component: DetalleOrientacionComponent;
  let fixture: ComponentFixture<DetalleOrientacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleOrientacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOrientacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
