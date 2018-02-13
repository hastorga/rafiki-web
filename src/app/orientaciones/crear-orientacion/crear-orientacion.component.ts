import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crear-orientacion',
  templateUrl: './crear-orientacion.component.html',
  styleUrls: ['./crear-orientacion.component.css']
})
export class CrearOrientacionComponent implements OnInit {

  rForm: FormGroup;
  asignatura: String = '';
  basesCurriculares: String = '';
  programaEstudio: String = '';
  introduccion: String = '';
  enfasis: String = '';
  nivelAprendizaje: String = '';
  profesorAutor: String;
  anhoAcademico: Number;
  semestre: Number;
  puntajeTotal: Number;
  preguntaEnunciado: String = '';
  respuesta: String = '';
  domain: string = 'http://localhost:10010';
  actividad: any;

  constructor(  private formBuilder: FormBuilder, private http: HttpClient, private router: Router){

    this.rForm = formBuilder.group({

      'asignatura': [null, Validators.required],
      'baseCurricular': [null, Validators.required],
      'programaEstudio': [null, Validators.required],
      'introduccion': [null, Validators.required],
      'asignaturas': this.formBuilder.array([]),
      'enfasis': [null, Validators.required],
    //  'respuesta': [null, Validators.required],
    
    });
  }

  ngOnInit() {
  }

  postOrientacion(post) {
 
    console.log(post);
    
    this.http.post(`${this.domain}/orientaciones`, post).subscribe(data =>{
      console.log(data);
      this.actividad = data;
      console.log(this.actividad);
    });

  
  }

  onAddAlternativas() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('preguntaAlternativas')).push(control);

  }

  onAddRespuestaAlternativas() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('respuestaAlternativas')).push(control);

  }

  onAddRetroalimentacion() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('retroalimentacion')).push(control);

  }
  onAddAsignaturas() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('asignaturas')).push(control);

  }

  

}