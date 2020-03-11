import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { AnadirComponent } from './anadir/anadir.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActualizarComponent } from './actualizar/actualizar.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ImagenComponent } from './imagen/imagen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    AnadirComponent,
    ActualizarComponent,
    DetallesComponent,
    ImagenComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
