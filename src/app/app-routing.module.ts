import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { AnadirComponent } from './anadir/anadir.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ImagenComponent } from './imagen/imagen.component';
import { ErrorComponent } from './error/error.component';

//rutas
const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'crear', component: AnadirComponent },
  { path: 'update/:id', component: ActualizarComponent },
  { path: 'details/:id', component: DetallesComponent },
  { path: 'imagen/:id', component: ImagenComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
