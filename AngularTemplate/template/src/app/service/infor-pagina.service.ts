import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/Info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InforPaginaService {
  info:InfoPage = {};
  constructor(public _http:HttpClient) {
      this._http.get('../assets/data/InfoPagina.json').subscribe((data)=>{
          
          this.info = data as InfoPage;
      });
      
  }

  
}
