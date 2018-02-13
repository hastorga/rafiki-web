import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Routes } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-lista-niveles',
  templateUrl: './lista-niveles.component.html',
  styleUrls: ['./lista-niveles.component.css'],
  animations: [
    trigger('animation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('200ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('200ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class ListaNivelesComponent implements OnInit {
  domain: String = 'http://localhost:10010';
  nivel: any;

  constructor(private HttpClient: HttpClient) { }

  getNiveles() {
    this.HttpClient.get(`${this.domain}/niveles`).subscribe(data => {
      console.log(data);
      this.nivel = data;
    });
  }

  deleteNivel(id) {
    this.HttpClient.delete(`${this.domain}/niveles/${id}`).subscribe(data => {
    this.ngOnInit();
    });
    

  }

  ngOnInit() {
    this.getNiveles();
  }

}
