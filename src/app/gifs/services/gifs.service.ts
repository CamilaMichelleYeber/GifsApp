import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //bloqueo de codigo
})
export class GifsService {
  //propiedad que obtiene los valores que en tiempo real se van cambiando
  private _historial: string[]=[];

  
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
  }
  
}
