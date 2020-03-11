import { Component, OnInit } from '@angular/core';
import { user } from "../user";//importo la clase
import { UsuariosService } from "../usuarios.service";//importo el servicio para pasar los datos
import { Router } from "@angular/router";//importo router para el redireccionamiento
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent implements OnInit {

  myForm: FormGroup;
  constructor(private usuarioService: UsuariosService, private router: Router,  public fb: FormBuilder) {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required]],
      email2: ['', [Validators.required], this.emailValido()],
    });
   }

  user: user = new user();
  users: user[];
  emailver: string;

  ngOnInit(): void {
    this.usuarioService.guardar()
    .subscribe(user => this.users = user);
  }

  add(){
    this.markFormTouched(this.myForm);
    if (this.myForm.valid) {
      let tamaño = this.users.length;
      let id: number;
      if(tamaño == 0){
        id = 1;
      }else {
        id = this.users[tamaño-1].id + 1;
      }
      this.user.id = id;
      this.users.push(this.user);
      this.router.navigate(['./']);
    }
  }

  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
      else { control.markAsTouched(); };
    });
  };

  emailValido(){
    
  }

}
