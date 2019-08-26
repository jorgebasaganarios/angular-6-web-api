export class Alumno {
  id: string;
  dni: string;
  nombre: string;

  constructor(dni, nombre) {
    this.dni = dni;
    this.nombre = nombre;
  }
}
