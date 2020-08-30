import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  result:any;

  constructor(private _http:HttpClient) { }

  getPrices(){
    
    return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=EUR,AOA,USD,BRL&tsyms=AOA,EUR,USD,BRL");
  }
}
