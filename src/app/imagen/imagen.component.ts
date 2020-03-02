import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

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

    cambiarURL(event: any){
      if(event.target.files && event.target.files[0]){
        var reader = new FileReader();

        reader.onload = (event:any) => {
          this.User.imagen = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
      }
    }
 

}
