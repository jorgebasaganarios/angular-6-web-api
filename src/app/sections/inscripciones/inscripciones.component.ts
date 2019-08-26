import { Component, OnInit } from '@angular/core';
import { AlumnosServiceService } from '../../alumnos-module/services/alumnos-service.service';

@Component({
  selector: 'app5-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  constructor(public alumnosServiceService: AlumnosServiceService) { }

  ngOnInit() {
  }

}
