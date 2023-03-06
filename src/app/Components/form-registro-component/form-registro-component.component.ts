//Modulos del componente
import { Component, OnInit } from '@angular/core';
//Manejo de formularios
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Modelos de datos
import { EgresosModel } from 'src/app/Models/EgresoModels.models';
import { IngresosModel } from 'src/app/Models/IngresoModels.models';
//Servicios para funcionalidades
import { EgresoService } from 'src/app/Services/EgresosServices.service';
import { IngresoService } from 'src/app/Services/IngresosService.service';
//Decorador del componente
@Component({
  selector: 'app-form-registro-component',
  templateUrl: './form-registro-component.component.html',
  styleUrls: ['./form-registro-component.component.css']
})
//Clase controladora del componente
export class FormRegistroComponentComponent implements OnInit{
  //Formulario Reactivo
    Registro:FormGroup;
  //Definicion de atributos
  //Tipo de Accion (+/-) con ! puede ser null
    Tipo!: string;
  //Metodo para inicializar / Injeccion de servicios
  constructor(private _FormBuilder:FormBuilder,
              private _IngresoService:IngresoService, 
              private _EgresoService:EgresoService){
      
      //Inicializacion del formulario Reacitov
      this.Registro = this._FormBuilder.group({
        //Inputs
        Description : ['', Validators.required],
        Value: ['', Validators.required]
      })

  }
   //Ciclo de vida
  ngOnInit(): void {}

  //Metodo que recibe un evento, para calcular el tipo de operacion deseada
  public TipoOp(event:any):void {
    this.Tipo = event.target.value;
  }

//Metodo para validar y registrar un evento
ejecutar():void{
  let Form = this.Registro.value;
  let Ingreso:IngresosModel;
  let Egreso:EgresosModel;
  Ingreso = new IngresosModel(Form.Description,Form.Value);
  Egreso = new EgresosModel(Form.Description,Form.Value);
    if(this.Tipo === 'ingreso'){
      this._IngresoService.getNuevoRegistro(Ingreso);
      this.Registro.reset();
    }else if(this.Tipo === 'egreso'){
      this._EgresoService.getNuevoRegistro(Egreso);
      this.Registro.reset();
    }else(
      window.alert('Elija una opcion de registo ' + "[+ INGRESO  / - EGRESO ]")
    )
}

}
