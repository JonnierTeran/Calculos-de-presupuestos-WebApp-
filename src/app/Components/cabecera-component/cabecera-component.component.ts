//Imports de los Modulos Necesarios
import { Component, Input } from '@angular/core';

//Decorador Del Componente y sus Elementos
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera-component.component.html',
  styleUrls: ['./cabecera-component.component.css']
})
//Creacion Y Exportacion de la clase
export class CabeceraComponent  {

  //Definicion de atributos heredados del componente padre por medio de Input
  @Input('Ingreso')Ingresos!:number;
  @Input('Egresos')Egresos!:number;
  @Input('Presupuesto')Presupuesto!:number;
  @Input('Percent') porcentaje!:number;
  
  constructor() { }
}
