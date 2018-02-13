import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-orientacion',
  templateUrl: './detalle-orientacion.component.html',
  styleUrls: ['./detalle-orientacion.component.css']
})
export class DetalleOrientacionComponent implements OnInit {
  orientacion: any;
  id: String;
  domain: string = 'http://localhost:10010';

  constructor(private route: ActivatedRoute, private router: Router, private HttpClient: HttpClient) { 
    this.route.params.subscribe(res => {
      this.id = res.id;
      console.log(res.id)
    })
  }

 
    ngOnInit() {
      this.HttpClient.get(`${this.domain}/orientaciones/${this.id}`).subscribe(data =>{
        // console.log(data);
        this.orientacion = data;
        console.log(this.orientacion);
      });
    }


}
