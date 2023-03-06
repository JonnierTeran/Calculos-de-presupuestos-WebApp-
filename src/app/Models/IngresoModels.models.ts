export class IngresosModel {
    /**Definimos los atributos de Nuestro Modelo de ingresos */
    private Description: String;
    private Value: number;
  
    /**Inicializamos los atributos de nuestro modelo
     * mediante el constructor de obj de ingresos */
    constructor(Description: String, Value: number) {
      this.Description = Description;
      this.Value = Value;
    }
  
    /**Creamos metodos de encapsulacio set y get
     * para accesibilidad y modificacion de atributos del objeto
     */
  
    //Encapsulamiento
    //Setters
    public setDescription(Description: String): void {
      this.Description = Description;
    }
    public setValue(Value: number): void {
      this.Value = Value;
    }
  
    //Getters
    public getDescription(): String {
      return this.Description;
    }
  
    public getValue(): number {
      return this.Value;
    }
  }
  