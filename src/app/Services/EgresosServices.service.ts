/**Import del Modelo De Objeto a Crear */

import { EgresosModel } from "../Models/EgresoModels.models";

/**Crea y exporta una clase */
export class EgresoService {
  //Se define Un Arreglo de tipo EgresoModel
  Egresos: EgresosModel[];
  
  //Se inicializa el Arreglo con un Arrays Sin elementos
  constructor() {
    this.Egresos = [];
  }
  
  //Se define metodo GetEliminarEgreso Para Borrar Un Registro
  getEliminarEgreso(indice:number){
    this.Egresos.splice(indice,1);
  }

  //Se define metodo GetNuevoRegistro Para Agregar Un Registro
  getNuevoRegistro(Obj:EgresosModel){
    this.Egresos.push(Obj)
  }
}
