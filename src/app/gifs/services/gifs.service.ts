import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //bloqueo de codigo
})
export class GifsService {
  //propiedad que obtiene los valores que en tiempo real se van cambiando
  
  private apiKey: string= 'xi9TrWCu2nVoTY6NVdBmHBF5RGO6s1AZ';
  private _historial: string[]=[];

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

    //utilizaremos observable para llamar a mi propiedad http y hacer la peticion
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=xi9TrWCu2nVoTY6NVdBmHBF5RGO6s1AZ&limit=10')
      .subscribe( (respuesta:any) => {
        console.log(respuesta.data);
      })

  }
  
}
