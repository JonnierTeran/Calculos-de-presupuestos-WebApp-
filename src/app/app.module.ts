import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './Components/cabecera-component/cabecera-component.component';
import { FormRegistroComponentComponent } from './Components/form-registro-component/form-registro-component.component';
import { IngresosComponentComponent } from './Components/ingresos-component/ingresos-component.component';
import { EgresosComponentComponent } from './Components/egresos-component/egresos-component.component';
import { EgresoService } from './Services/EgresosServices.service';
import { IngresoService } from './Services/IngresosService.service';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormRegistroComponentComponent,
    IngresosComponentComponent,
    EgresosComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EgresoService, IngresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
