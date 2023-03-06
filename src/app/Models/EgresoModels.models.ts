export class EgresosModel{
    /**Definimos los atributos de Nuestro Modelo de Egresos */
    private Description: string;
    Value: number;
  
    /**Inicializamos los atributos de nuestro modelo
     * mediante el constructor de obj de Egresos */
    constructor(Description: string, Value: number) {
      this.Description = Description;
      this.Value = Value;
    }
  
    /**Creamos metodos de encapsulacio set y get
     * para accesibilidad y modificacion de atributos del objeto
     */
  
    //Encapsulamiento
    //Setters
    public setDescription(Description: string): void {
      this.Description = Description;
    }
    public setValue(Value: number): void {
      this.Value = Value;
    }
  
    //Getters
    public getDescription(): string {
      return this.Description;
    }
  
    public getValue(): number {
      return this.Value;
    }
    
  }
  