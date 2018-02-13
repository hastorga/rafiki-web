import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-modificar-orientacion',
  templateUrl: './modificar-orientacion.component.html',
  styleUrls: ['./modificar-orientacion.component.css']
})
export class ModificarOrientacionComponent implements OnInit {
  domain : String = 'http://localhost:10010';
  orientacion:any;
  id: String;
  rForm: FormGroup;
  basesCurriculares: String = '';
  programaEstudio: String = '';
  introduccion: String = '';
  enfasis: String = '';
  proposito_formativo: String = '';
  asignaturas: any[] = [];


  constructor(private formBuilder: FormBuilder,private HttpClient: HttpClient, private route: ActivatedRoute) { 

    this.rForm = formBuilder.group({
      'basesCurriculares': [Validators.required],
      'programaEstudio': [Validators.required],
      'introduccion': [Validators.required],
      'totalTiempoMinFG': [Validators.required],
      'totalTiempoMinFD': [Validators.required],
      'asignaturas': this.formBuilder.array([this.initAsignatura()])
})
    this.route.params.subscribe(res => {
      this.id = res.id;
      console.log(res.id)
    })

  }

 
  initAsignatura() {
    return this.formBuilder.group({
      asignatura: [null, Validators.required],
      enfasis: [null, Validators.required],
      proposito_formativo: [null, Validators.required]
    })
  }

  removeAsignatura(i: number) {
    const control = <FormArray>this.rForm.controls['asignaturas'];
    control.removeAt(i);
  }
  addAsignatura(): void {
    const control = <FormArray>this.rForm.controls['asignaturas'];
    control.push(this.initAsignatura());
  }


  updateOrientacion(put) {
    console.log(put);
    this.HttpClient.put(`${this.domain}/orientaciones/${this.id}`, put).subscribe(data => {
      
      this.orientacion = data;
      console.log(this.orientacion);
    });
  }
  getOrientacionId() {
    this.HttpClient.get(`${this.domain}/orientaciones/${this.id}`).subscribe(data => {
      // console.log(data);
      this.orientacion = data;
      console.log(this.orientacion);
    });
  }
  ngOnInit() {
    this.getOrientacionId();
  }
}
