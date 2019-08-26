import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../alumno/alumno';
import { environment } from '../../../environments/environment';

@Injectable()
export class AlumnosServiceService {

  private URL = environment.API_URL;
  private alumno: Alumno;
  public resultado = false;
  public repeatedDNI = false;
  public dataUpgradedOk = false;  
  public userData = { nombre: '', dni: '' };
  id: string;
  dni: string;
  nombre: string;
  placeholders = { 'alumnoDNI': 'Documento de ID', 'alumnoName': 'Nombre del alumno'};
  valor: number;
  arrayAlumnos: Alumno[] = [];
  alumnosRegistrados = 0;
  alumnosRegistradosCounter = this.readRecords();
  i = 0;

  constructor(private http: HttpClient) {
    this.dni = '';
    this.nombre = '';
  }

  private saveRecord$(member: Alumno): Observable<any> {
    return this.http.post(this.URL + 'save_record.php', member);
  }

  private readRecords$(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.URL + 'read_records.php');
  }

  private editRecord$(member: Alumno): Observable<any> {
    return this.http.post(this.URL + 'edit_record.php', member);
  }

  private deleteRecord$(id: string): Observable<any> {
    return this.http.post(this.URL + 'delete_record.php', id);
  }
  
  public checkRecord() {
    if (this.dni !== '' && this.nombre !== '') {
        this.alumno = new Alumno(this.dni, this.nombre);
        this.saveRecord();
    }
  }

  private saveRecord() {    
    this.saveRecord$(this.alumno).subscribe(
      this.saveSuccess.bind(this),
      this.catchError.bind(this)
    );    
    this.resultado = true;
  }
 
   public deleteRecord(id: string) {
    this.deleteRecord$(id).subscribe(
    this.deleteSuccess.bind(this),
    this.catchError.bind(this)
  );
}

  private readRecords() {
    this.readRecords$().subscribe(
      this.readSucces.bind(this),
      this.catchError.bind(this)
    );
  }

  private saveSuccess(result) {    
    if (result === '23000') {
      this.repeatedDNI = true;
    } else {
      this.dataUpgradedOk = true;
      this.dni = '';
      this.nombre = '';
    }    
    this.readRecords();
  } 

  private readSucces(result) {
    this.arrayAlumnos = result;
    this.alumnosRegistrados = this.arrayAlumnos.length;
  }

  /**
   * @param User
   */

  deleteSuccess(User) {
    this.readRecords();
   }

  private catchError() {
    this.dataUpgradedOk = false;
    this.repeatedDNI = false;
  }

}
