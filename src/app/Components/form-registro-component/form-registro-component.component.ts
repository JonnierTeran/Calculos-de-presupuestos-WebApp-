import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EgresosModel } from 'src/app/Models/EgresoModels.models';
import { IngresosModel } from 'src/app/Models/IngresoModels.models';
import { EgresoService } from 'src/app/Services/EgresosServices.service';
import { IngresoService } from 'src/app/Services/IngresosService.service';

@Component({
  selector: 'app-form-registro-component',
  templateUrl: './form-registro-component.component.html',
  styleUrls: ['./form-registro-component.component.css']
})

export class FormRegistroComponentComponent implements OnInit{

  //Formulario Reactivo
  Registro:FormGroup;
  //Definicion de atributos
  //Tipo de Accion (+/-)
  Tipo!: string;



  constructor(private _FormBuilder:FormBuilder,
              private _IngresoService:IngresoService, 
              private _EgresoService:EgresoService){

      this.Registro = this._FormBuilder.group({
        //Inputs
        Description : ['', Validators.required],
        Value: ['', Validators.required]
      })

  }


  ngOnInit(): void {
  
    
  }


  public TipoOp(event:any):void {
    this.Tipo = event.target.value;
  }

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

 nombreField() {
  return this.Registro.get('Description');
}
  
}
