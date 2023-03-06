import { Component } from '@angular/core';
import { IngresosModel } from 'src/app/Models/IngresoModels.models';
import { IngresoService } from 'src/app/Services/IngresosService.service';

@Component({
  selector: 'app-ingresos-component',
  templateUrl: './ingresos-component.component.html',
  styleUrls: ['./ingresos-component.component.css']
})
export class IngresosComponentComponent {
     Ingresos:IngresosModel[];

    constructor(private _IngresosService:IngresoService){
      this.Ingresos = this._IngresosService.Ingresos;
    }

    Delete(i:number):void{
      this._IngresosService.getEliminarIngreso(i)
    }

}
