import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';

import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';

import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url = "https://heroesappcrud-734b0.firebaseio.com/Heroes.json";
  heroeUrl = 'https://heroesappcrud-734b0.firebaseio.com/Heroes/';

  constructor(private http: Http) { }

  newHeroe(heroe: Heroe): Observable<any> {

    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.url, body, { headers })
      .map(res => {
        console.log(res.json());
        return res.json();
      });

  }

  updateHeroe(heroe: Heroe, key$:string): Observable<any> {

    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${ this.heroeUrl }/${ key$ }.json`

    return this.http.put(url, body, { headers })
      .map(res => {
        console.log(res.json());
        return res.json();
      });

  }


  getHeroe( key$:string ){
    
    let url = `${ this.heroeUrl }/${ key$ }.json`;
    return this.http.get( url ).map( res =>  res.json());
  }

}
