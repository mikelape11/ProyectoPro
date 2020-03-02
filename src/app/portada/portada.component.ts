import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service'; //importo el servicio para pasar los datos
import { user } from "../user"; //importo la clase
import { Router } from "@angular/router";



@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  constructor(private usuarioService: UsuariosService, private router: Router) { }

  //creo un array vacio
  users: user[];
  ngOnInit() {
    this.getUsuario();
  }

  getUsuario(): void {
    this.usuarioService.guardar()
    .subscribe(user => this.users = user);
  }

  borrar(user: user): void{
    const posicion: number = this.users.indexOf(user);
    this.users.splice(posicion,1); 
  }

  actualizar(user: user): void{
    this.router.navigate(['./update/'+user.id]);
  }

  detalles(user: user): void{
    this.router.navigate(['./details/'+user.id]);
  }

  anadirimagen(user: user): void{
    this.router.navigate(['./imagen/'+user.id]);
  }
}
