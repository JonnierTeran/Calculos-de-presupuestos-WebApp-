//Modulos necesarios para el componente
import { Component } from '@angular/core';
//Modelos de datos
import { IngresosModel } from 'src/app/Models/IngresoModels.models';
//Servicios del componente
import { IngresoService } from 'src/app/Services/IngresosService.service';

//Decorador del componente
@Component({
  selector: 'app-ingresos-component',
  templateUrl: './ingresos-component.component.html',
  styleUrls: ['./ingresos-component.component.css']
})
//Clase controladora
export class IngresosComponentComponent {
    //Propiedad Que almacena los Ingresos Registrados 
    Ingresos:IngresosModel[];

    //Metodo para inicializar y/o Injectar servicios
    constructor(private _IngresosService:IngresoService){
      this.Ingresos = this._IngresosService.Ingresos;
    }

    //Metodo para eliminar un ingreso
    Delete(i:number):void{
      this._IngresosService.getEliminarIngreso(i)
    }

}
