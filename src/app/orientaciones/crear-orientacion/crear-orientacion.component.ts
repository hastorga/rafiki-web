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
  proposito_formativo: String = '';
  asignaturas: any[] = [];
  
  domain: string = 'http://localhost:10010';
  orientacion: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {

    this.rForm = formBuilder.group({

      'basesCurriculares': [null, Validators.required],
      'programaEstudio': [null, Validators.required],
      'introduccion': [null, Validators.required],
      'asignaturas': this.formBuilder.array([this.initAsignatura()])

    });
  }

  ngOnInit() {
  }
  initAsignatura() {
    return this.formBuilder.group({
      asignatura: [null, Validators.required],
      enfasis: [null, Validators.required],
      proposito_formativo: [null, Validators.required]
    });
  }
  removeAsignatura(i: number) {
    const control = <FormArray>this.rForm.controls['asignaturas'];
    control.removeAt(i);
  }
  addAsignatura(): void {
    const control = <FormArray>this.rForm.controls['asignaturas'];
    control.push(this.initAsignatura());
  }

  postOrientacion(post) {

    console.log(post);

    this.http.post(`${this.domain}/orientaciones`, post).subscribe(data => {
      console.log(data);
      this.orientacion = data;
      console.log(this.orientacion);
    });


  }
  onAddAsignaturas() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.rForm.get('asignaturas')).push(control);

  }



}