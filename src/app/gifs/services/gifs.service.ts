import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root' //bloqueo de codigo
})
export class GifsService {
  //propiedad que obtiene los valores que en tiempo real se van cambiando
  
  private apiKey: string= 'xi9TrWCu2nVoTY6NVdBmHBF5RGO6s1AZ';
  private _historial: string[]=[];
  private servicioUrl: string= 'https://api.giphy.com/v1/gifs';
  //propiedad que va a ser utilizada para almacenar mi data
  public resultado: Gif[] = [];

  /*get ultimo_resultado(){
    return [...this.resultado];
   }*/

  
  get historial(){
   return [...this._historial];
  }


   //creamos contructor para importar mi HttpClientModule
  constructor ( private http: HttpClient){
    //mostramos la informacion proporcionada por el localStorage en el panel lateral de nuestra web
    this._historial=JSON.parse(localStorage.getItem('historial')!) || [];

    //mostramos la ultima busqueda en pantalla del historial al recargar el navegador
   // this.resultado=JSON.parse(localStorage.getItem('ultimo_resultado')!) || [];
   this.resultado=JSON.parse(localStorage.getItem('resultado')!) || [];

  }

  //insercion de nuevos valores al historial
  historialGifs(historialBusqueda:string= ''){ //mi string siempre tiene un valor
    
    historialBusqueda= historialBusqueda.trim().toLocaleLowerCase(); //procesa todo en minuscula

    if (!this._historial.includes(historialBusqueda)) { //si lo incluye, ejecuta el codigo de adentro del condicional
      this._historial.unshift(historialBusqueda); //el ultimo dato que ponemos en la caja de busqueda se coloca primero en mi panel lateral
    this._historial= this._historial.splice(0,10); //con esto cortamos nuestro array principal limitandolo de 0 a 10  
    
    localStorage.setItem('historial', JSON.stringify(this._historial)); //grabamos en el localStorage la informacion de la caja de busqeuda
  

    }
   
     //constante para almacenar los parametros de mi urlSearch
     const params= new HttpParams()
    //seteamos los parametros que queremos
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', historialBusqueda);

    console.log(params.toString());

    //utilizaremos observable para llamar a mi propiedad http y hacer la peticion e interpolamos mi string url para pasarle el parametro que trae el valor de mi caja de busqueda
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
      .subscribe( (respuesta) => {
        //console.log(respuesta.data);
        this.resultado=respuesta.data; //lo acepta porque no esta seguro de si es un arreglo o no
      //mostramos la ultima busqueda en pantalla
      //localStorage.setItem('ultimo_resultado', JSON.stringify(this.resultado));
      localStorage.setItem('resultado', JSON.stringify(this.resultado));
      })

  }
  
}
