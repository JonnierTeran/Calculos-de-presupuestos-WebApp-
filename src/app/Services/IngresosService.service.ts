/**Importamos el modelo necesitado para crear los objetos en este servicio */
import { IngresosModel } from '../Models/IngresoModels.models';

/**Exportamos La clase del servicio */
export class IngresoService {
  /**Se define un Array de Tipo IngresoModel */
  Ingresos: IngresosModel[];

  /**Inicializamos el Arreglo con un Arrays Sin elementos */
  constructor() {
    this.Ingresos = [];
  }

   //Se define metodo GetEliminarEgreso Para Borrar Un Registro
  getEliminarIngreso(indice:number){
    this.Ingresos.splice(indice,1);
  }
  
   //Se define metodo GetNuevoRegistro Para Agregar Un Registro
  getNuevoRegistro(Obj:IngresosModel){
    this.Ingresos.push(Obj)
  }

}