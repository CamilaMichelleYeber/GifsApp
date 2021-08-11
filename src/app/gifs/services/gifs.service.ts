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
  historialGifs(historialBusqueda:string){
    this._historial.unshift(historialBusqueda);
    console.log(this._historial);
  }
  
}
