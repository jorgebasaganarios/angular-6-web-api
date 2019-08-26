import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactarComponent } from './contactar/contactar.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { AlumnosServiceService } from '../alumnos-module/services/alumnos-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [AlumnosServiceService],
  declarations: [ ContactarComponent, InscripcionesComponent, ListadoAlumnosComponent],
  exports: [ ContactarComponent, InscripcionesComponent, ListadoAlumnosComponent]
})
export class SectionsModule { }
