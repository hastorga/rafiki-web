import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOrientacionComponent } from './crear-orientacion.component';

describe('CrearOrientacionComponent', () => {
  let component: CrearOrientacionComponent;
  let fixture: ComponentFixture<CrearOrientacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearOrientacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOrientacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
