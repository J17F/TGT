import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interface/infopage.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  info: InfoPage = {};
  cargada = false;

  constructor( private http: HttpClient ) { 

    //Leer el archivo json
    this.http.get('assets/data/infopage.json')
        .subscribe ( (resp: InfoPage) => {

          this.cargada = true;
          this.info = resp;

        });
  }
}
