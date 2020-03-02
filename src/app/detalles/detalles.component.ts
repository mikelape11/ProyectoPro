import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../user';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private usuarioService: UsuariosService) { }

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
