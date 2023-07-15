import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import {  catchError, ignoreElements, pluck, take, tap, throttleTime, withLatestFrom  } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  public url='https://rickandmortyapi.com/api/';
  public pagin='https://rickandmortyapi.com/api/character/?page=';
  constructor(private _http: HttpClient) { }


  getPersonajes(pagina:any){
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    
      if(pagina=="")
      return this._http.get<any>(this.url+'character/');
      else
      return this._http.get<any>(this.pagin+pagina);
    
    
  }
  getPersonaje(id:any){
    return this._http.get<any>(this.url+'character/'+id);

  }
  getlocation(id:any){
    return this._http.get<any>(this.url+'location/'+id);
  }

}
