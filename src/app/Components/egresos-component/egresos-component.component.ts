import { Component, Input } from '@angular/core';
import { EgresosModel } from 'src/app/Models/EgresoModels.models';
import { EgresoService } from 'src/app/Services/EgresosServices.service';

@Component({
  selector: 'app-egresos-component',
  templateUrl: './egresos-component.component.html',
  styleUrls: ['./egresos-component.component.css']
})
export class EgresosComponentComponent {  
    Egresos:EgresosModel[];

    @Input('IngresoT')IngresoT!:number;

    constructor(private _EgresosService:EgresoService){
      this.Egresos=this._EgresosService.Egresos;
    }

    Delete(i:number):void{
      this._EgresosService.getEliminarEgreso(i)
    }

    public PorcentajeEgreso(i:number):number{
      return this._EgresosService.Egresos[i].getValue() / this.IngresoT;
    }
    

}
