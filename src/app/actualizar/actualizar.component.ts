import { Component, OnInit } from '@angular/core';
import { user } from "../user";
import { UsuariosService } from "../usuarios.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  constructor(private usuarioService: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  User: user = new user();
  users: user[];

  ngOnInit(): void {
    this.getUsuario();
    var id = this.activatedRoute.snapshot.params["id"];
    for(let user of this.users){
      if(user.id == id){
        this.User = user;
      }
    }
    
  }
  
  getUsuario(): void {
    this.usuarioService.guardar()
    .subscribe(user => this.users = user);
  }
}

