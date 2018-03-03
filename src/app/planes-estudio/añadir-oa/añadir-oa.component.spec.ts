import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AñadirOaComponent } from './añadir-oa.component';

describe('AñadirOaComponent', () => {
  let component: AñadirOaComponent;
  let fixture: ComponentFixture<AñadirOaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AñadirOaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AñadirOaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
