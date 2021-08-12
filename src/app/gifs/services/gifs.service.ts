import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //bloqueo de codigo
})
export class GifsService {
  //propiedad que obtiene los valores que en tiempo real se van cambiando
  
  private apiKey: string= 'xi9TrWCu2nVoTY6NVdBmHBF5RGO6s1AZ';
  private _historial: string[]=[];
  //propiedad que va a ser utilizada para almacenar mi data
  public resultado: any[] = [];

  //creamos contructor para importar mi HttpClientModule
  constructor ( private http: HttpClient){}

  
  get historial(){
   return [...this._historial];
  }

  //insercion de nuevos valores al historial
  historialGifs(historialBusqueda:string= ''){ //mi string siempre tiene un valor
    
    historialBusqueda= historialBusqueda.trim().toLocaleLowerCase(); //procesa todo en minuscula

    if (!this._historial.includes(historialBusqueda)) { //si lo incluye, ejecuta el codigo de adentro del condicional
      this._historial.unshift(historialBusqueda); //el ultimo dato que ponemos en la caja de busqueda se coloca primero en mi panel lateral
    this._historial= this._historial.splice(0,10); //con esto cortamos nuestro array principal limitandolo de 0 a 10    
    }
    console.log(this._historial);

    //utilizaremos observable para llamar a mi propiedad http y hacer la peticion e interpolamos mi string url para pasarle el parametro que trae el valor de mi caja de busqueda
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=xi9TrWCu2nVoTY6NVdBmHBF5RGO6s1AZ&q=${historialBusqueda}&limit=10`)
      .subscribe( (respuesta:any) => {
        console.log(respuesta.data);
        this.resultado=respuesta.data; //lo acepta porque no esta seguro de si es un arreglo o no
      })

  }
  
}
