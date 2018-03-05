import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOaComponent } from './lista-oa.component';

describe('ListaOaComponent', () => {
  let component: ListaOaComponent;
  let fixture: ComponentFixture<ListaOaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
