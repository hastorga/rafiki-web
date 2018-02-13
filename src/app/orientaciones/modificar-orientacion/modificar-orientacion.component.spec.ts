import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarOrientacionComponent } from './modificar-orientacion.component';

describe('ModificarOrientacionComponent', () => {
  let component: ModificarOrientacionComponent;
  let fixture: ComponentFixture<ModificarOrientacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarOrientacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarOrientacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
