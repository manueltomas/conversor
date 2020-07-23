import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conversor';
  cambioEuro;
  cambioKwanza;
  valorEuro;
  valorKwanza;

  defaultEKEUR;
  defaultEKAOA;

  defaultKEEUR;
  defaultKEAOA;

  objectKeys = Object.keys;
  cryptos: any;

  constructor(private _data:DataService){}

  ngOnInit(){
    this._data.getPrices()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
        this.defaultEKEUR = 1;
        this.defaultEKAOA = this.cryptos.EUR.AOA;
        this.defaultKEAOA = 1;
        this.defaultKEEUR = this.cryptos.AOA.EUR;
      });
  }
  calculateEurAkz(){
    if(this.cambioEuro == undefined || this.cambioEuro == null || this.cambioEuro == 0){
      alert('Indique o cambio a usar');
      return;
    }
    if(this.cambioKwanza == undefined || this.cambioKwanza == null || this.cambioKwanza == 0){
      alert('Indique o cambio a usar');
      return;
    }
    if(this.valorEuro == undefined || this.valorEuro == null || this.valorEuro == 0){
      alert('Indique o valor em euros a converter');
      return;
    }
    this.valorKwanza = (this.valorEuro * this.cambioKwanza) / this.cambioEuro;
  }

  calculateAkzEur(){
    if(this.cambioEuro == undefined || this.cambioEuro == null || this.cambioEuro == 0){
      alert('Indique o cambio a usar');
      return;
    }
    if(this.cambioKwanza == undefined || this.cambioKwanza == null || this.cambioKwanza == 0){
      alert('Indique o cambio a usar');
      return;
    }
    if(this.valorKwanza == undefined || this.valorKwanza == null || this.valorKwanza == 0){
      alert('Indique o valor em kwanzas a converter');
      return;
    }
    this.valorEuro = (this.valorKwanza * this.cambioEuro) / this.cambioKwanza;
  }

  defaultEK(){
    this.cambioEuro = this.defaultEKEUR;
    this.cambioKwanza = this.defaultEKAOA;
  }

  defaultKE(){
    this.cambioEuro = this.defaultKEEUR;
    this.cambioKwanza = this.defaultKEAOA;
  }

  limpar(){
    this.cambioEuro = null;
    this.cambioKwanza = null;
    this.valorEuro = null;
    this.valorKwanza = null;
  }
}
