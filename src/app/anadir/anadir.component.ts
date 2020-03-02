import { Component, OnInit } from '@angular/core';
import { user } from "../user";//importo la clase
import { UsuariosService } from "../usuarios.service";//importo el servicio para pasar los datos
import { Router } from "@angular/router";//importo router para el redireccionamiento

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent implements OnInit {

  constructor(private usuarioService: UsuariosService, private router: Router) { }

  user: user = new user();
  users: user[];
  ngOnInit(): void {
    this.usuarioService.guardar()
    .subscribe(user => this.users = user);
  }

  add(){
    let tamaño = this.users.length;
    let id = this.users[tamaño-1].id+1;
    this.user.id = id;
    this.users.push(this.user);
    this.router.navigate(['./']);
    
  }

}
