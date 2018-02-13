import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { OrganizacionModule } from './organizacion/organizacion.module';
import { CursoModule } from './curso/curso.module';
import { NivelModule } from './niveles/nivel.module';
import { OrientacionesModule } from './orientaciones/orientaciones.module';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './authentication-authorization/home/home.component';
import { AuthGuard } from './authentication-authorization/_guards/auth.guard';
import { LoginComponent } from './authentication-authorization/login/login.component';
import { RegisterComponent } from './authentication-authorization/register/register.component';
import { AlertService } from './authentication-authorization/_services/alert.service';
import { AuthenticationService } from './authentication-authorization/_services/authentication.service';
import { UserService } from './authentication-authorization/_services/user.service';
import { JwtInterceptor } from './authentication-authorization/_helpers/jwt.interceptor';
import { fakeBackendProvider } from './authentication-authorization/_helpers/fake-backend';
import { ListaNivelesComponent } from './niveles/lista-niveles/lista-niveles.component';
import { ListaCursosComponent } from './curso/lista-cursos/lista-cursos.component';
import { CrearCursoComponent } from './curso/crear-curso/crear-curso.component';
import { CrearNivelComponent } from './niveles/crear-nivel/crear-nivel.component';
import { DetalleNivelComponent } from './niveles/detalle-nivel/detalle-nivel.component';
import { ModificarNivelComponent } from './niveles/modificar-nivel/modificar-nivel.component';
import { ErroresRutasComponent } from './errores-rutas/errores-rutas.component';
import { ListaOrientacionesComponent } from './orientaciones/lista-orientaciones/lista-orientaciones.component';
import { DetalleOrientacionComponent } from './orientaciones/detalle-orientacion/detalle-orientacion.component';
import { ModificarOrientacionComponent } from './orientaciones/modificar-orientacion/modificar-orientacion.component';
import { CrearOrientacionComponent } from './orientaciones/crear-orientacion/crear-orientacion.component';




const appRoutes: Routes = [

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'path-error', component: ErroresRutasComponent  },
  { path: 'register', component: RegisterComponent },
  { path: 'niveles/crear-nivel', component: CrearNivelComponent  },
  { path: 'niveles', component: ListaNivelesComponent },
  { path: 'niveles/:id', component: DetalleNivelComponent  },
  { path: 'niveles/:id/editar', component: ModificarNivelComponent  },
  { path: 'cursos', component: ListaCursosComponent }, // momentaneo, eliminar luego y usar el modulo completo
  { path: 'cursos/crear-curso', component: CrearCursoComponent  },
  { path: 'orientaciones_curriculares/crear-orientacion', component: CrearOrientacionComponent  },
  { path: 'orientaciones_curriculares', component: ListaOrientacionesComponent  },
  { path: 'orientaciones_curriculares/:id', component: DetalleOrientacionComponent  },
  { path: 'orientaciones_curriculares/:id/editar', component: ModificarOrientacionComponent  },
  { path: 'path-error', component: ErroresRutasComponent  },  
  

  

  // otherwise redirect to home
   { path: '**', redirectTo: 'path-error' }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ErroresRutasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    OrganizacionModule,
    CursoModule,
    NivelModule,
    OrientacionesModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }