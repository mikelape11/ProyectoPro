import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { AnadirComponent } from './anadir/anadir.component';
import { FormsModule } from "@angular/forms";
import { ActualizarComponent } from './actualizar/actualizar.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ImagenComponent } from './imagen/imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    AnadirComponent,
    ActualizarComponent,
    DetallesComponent,
    ImagenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
