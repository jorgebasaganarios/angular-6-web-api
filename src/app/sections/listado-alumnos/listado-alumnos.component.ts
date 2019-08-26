import { Component, OnInit } from '@angular/core';
import { AlumnosServiceService } from 'src/app/alumnos-module/services/alumnos-service.service';

@Component({
  selector: 'app8-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  constructor(public alumnosServiceService: AlumnosServiceService) { }

  ngOnInit() {
  }

}
