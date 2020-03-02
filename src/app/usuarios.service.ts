import { Injectable } from '@angular/core';
import { user } from './user'; //importo la clase user
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }
  //creo un array con los datos
  usuarios: user[] = [
    {id: 1, nombre: "Mikel", apellido: "Etxeberria", email: "mikelapezetxea@gmail.com", imagen: ""},
    {id: 2, nombre: "Josu", apellido: "Babace", email: "josubabace@gmail.com", imagen: ""},
    {id: 3, nombre: "Melanie", apellido: "Miguel", email: "melaniemiguel@gmail.com", imagen: ""},
    {id: 4, nombre: "Javi", apellido: "Sanchez", email: "pichula@gmail.com", imagen: ""},
    {id: 5, nombre: "Enetz", apellido: "Rodriguez", email: "pichula2@gmail.com", imagen: ""},
    {id: 6, nombre: "Endika", apellido: "Hernandez", email: "halamadrid@gmail.com", imagen: ""},
  ];

  //creo una funcion para guardar los datos y pasar a otro componente
  guardar(): Observable<user[]>{
    return of(this.usuarios);
  }
}
  
