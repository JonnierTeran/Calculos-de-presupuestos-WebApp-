//Modulos y librerias necesarias para el componente
import { Component, OnInit } from '@angular/core';

//Modelos de datos para los arreglos
import { EgresosModel } from './Models/EgresoModels.models';
import { IngresosModel } from './Models/IngresoModels.models';

//Servicios para emitir funcionalidades al componente
import { EgresoService } from './Services/EgresosServices.service';
import { IngresoService } from './Services/IngresosService.service';



//Decordarod del componente y su estructura
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
//Clase controladora del componente
export class AppComponent implements OnInit{

    //Variables / Propiedades de la clase
    private Ingresos:IngresosModel[];
    private Egresos:EgresosModel[];

    //Constructor: Inicializa propiedades e inyecta servicios
    constructor(private _IngresosService:IngresoService, private _EgresosService:EgresoService){
      this.Ingresos = _IngresosService.Ingresos;
      this.Egresos = _EgresosService.Egresos;
    }
  ngOnInit(): void {
    //console.log('Ingreso: '+ this.getIngresoTotal());
    //console.log('Egreso: '+ this.getEgresoTotal());
    //console.log('Presupuesto: '+ this.getPresupuestoTotal());
    //console.log('porcentaje: '+ this.getPorcentajeEgreso());
    
  }

    //Metodo para calcular el ingreso total
    public getIngresoTotal():number{
      let Value:number;
      Value=0;
      this.Ingresos.forEach( Element =>{
        Value += Element.getValue();
      })
      return Value;
    }

      //Metodo para calcular el ingreso total
      public getEgresoTotal():number{
        let Value:number;
        Value=0;
        this.Egresos.forEach( Element =>{
          Value += Element.getValue();
        })
        return Value;
      }


    //Metodo para calcular el presupuesto total
    getPresupuestoTotal():number{
      return this.getIngresoTotal() - this.getEgresoTotal(); 
    }

    //Metodo para calcular el Porcentaje del egreso ante el ingreso
    public getPorcentajeEgreso():number{
      return this.getEgresoTotal() / this.getIngresoTotal(); 
    }
  
    
}
