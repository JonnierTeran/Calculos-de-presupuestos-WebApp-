//Modulos del componente 
import { Component, Input } from '@angular/core';
//Modelo de datos
import { EgresosModel } from 'src/app/Models/EgresoModels.models';
//Servicios para heredar funcionalidades
import { EgresoService } from 'src/app/Services/EgresosServices.service';

//Decorador del componente
@Component({
  selector: 'app-egresos-component',
  templateUrl: './egresos-component.component.html',
  styleUrls: ['./egresos-component.component.css']
})

//Clase Del componente
export class EgresosComponentComponent {  

    //propiedad Tipo arreglo para almacenar los egresos registrados
    Egresos:EgresosModel[];

    //Propiedad heredada del componente padre
    @Input('IngresoT')IngresoT!:number;

    //Metodo para inicializar props / injectar servicioos
    constructor(private _EgresosService:EgresoService){
      this.Egresos=this._EgresosService.Egresos;
    }

    //Metodo para eliminar un egreso
    Delete(i:number):void{
      this._EgresosService.getEliminarEgreso(i)
    }

    //Metodo para calcular el porcentaje de cada egreso
    public PorcentajeEgreso(i:number):number{
      return this._EgresosService.Egresos[i].getValue() / this.IngresoT;
    }
    

}
