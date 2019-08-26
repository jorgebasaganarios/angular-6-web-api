import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { ContactarComponent } from './sections/contactar/contactar.component';
import { ListadoAlumnosComponent } from './sections/listado-alumnos/listado-alumnos.component';
import { InscripcionesComponent } from './sections/inscripciones/inscripciones.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  { 
    path: 'formulario',
    component: InscripcionesComponent
  },
  { 
    path: 'listado',
    component: ListadoAlumnosComponent
  },
  { 
    path: 'contactar',
    component: ContactarComponent
    },
  {
    path: '**',
    component: NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
