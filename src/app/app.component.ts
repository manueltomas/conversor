import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conversor';

  moedaA = "EUR";
  moedaB = "EUR";

  deafaultsEUR;
  deafaultsUSD;
  deafaultsAOA;
  deafaultsBRL;

  cambioA;
  cambioB;
  valorA;
  valorB;

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
        this.deafaultsEUR = this.cryptos.EUR;
        this.deafaultsUSD = this.cryptos.USD;
        this.deafaultsBRL = this.cryptos.BRL;
        this.deafaultsAOA = this.cryptos.AOA;
        console.log(this.deafaultsAOA);
        console.log(this.deafaultsBRL);
        console.log(this.deafaultsEUR);
        console.log(this.deafaultsUSD);
        this.defaultEKEUR = 1;
        this.defaultEKAOA = this.cryptos.EUR.AOA;
        this.defaultKEAOA = 1;
        this.defaultKEEUR = this.cryptos.AOA.EUR;
      });
  }
  calculateEurAkz(){
    if(this.cambioA == undefined || this.cambioA == null || this.cambioA == 0){
      alert('Indique o cambio a usar');
      return;
    }
    if(this.cambioB == undefined || this.cambioB == null || this.cambioB == 0){
      alert('Indique o cambio a usar');
      return;
    }
    if(this.valorA == undefined || this.valorA == null || this.valorA == 0){
      alert('Indique o valor em euros a converter');
      return;
    }
    this.valorB = (this.valorA * this.cambioB) / this.cambioA;
  }

  calculateAkzEur(){
    if(this.cambioA == undefined || this.cambioA == null || this.cambioA == 0){
      alert('Indique o cambio a usar');
      return;
    }
    if(this.cambioB == undefined || this.cambioB == null || this.cambioB == 0){
      alert('Indique o cambio a usar');
      return;
    }
    if(this.valorB == undefined || this.valorB == null || this.valorB == 0){
      alert('Indique o valor em kwanzas a converter');
      return;
    }
    this.valorA = (this.valorB * this.cambioA) / this.cambioB;
  }

  defaultAB(){
    this.cambioA = 1
    if(this.moedaA === "EUR"){
      if(this.moedaB === "EUR"){
        this.cambioB = this.deafaultsEUR.EUR;
      }else if(this.moedaB === "USD"){
        this.cambioB = this.deafaultsEUR.USD;
      }else if(this.moedaB === "BRL"){
        this.cambioB = this.deafaultsEUR.BRL;
      }else{
        this.cambioB = this.deafaultsEUR.AOA;
      }
    }else if(this.moedaA === "USD"){
      if(this.moedaB === "EUR"){
        this.cambioB = this.deafaultsUSD.EUR;
      }else if(this.moedaB === "USD"){
        this.cambioB = this.deafaultsUSD.USD;
      }else if(this.moedaB === "BRL"){
        this.cambioB = this.deafaultsUSD.BRL;
      }else{
        this.cambioB = this.deafaultsUSD.AOA;
      }
    }else if(this.moedaA === "BRL"){
      if(this.moedaB === "EUR"){
        this.cambioB = this.deafaultsBRL.EUR;
      }else if(this.moedaB === "USD"){
        this.cambioB = this.deafaultsBRL.USD;
      }else if(this.moedaB === "BRL"){
        this.cambioB = this.deafaultsBRL.BRL;
      }else{
        this.cambioB = this.deafaultsBRL.AOA;
      }
    }else{
      if(this.moedaB === "EUR"){
        this.cambioB = this.deafaultsAOA.EUR;
      }else if(this.moedaB === "USD"){
        this.cambioB = this.deafaultsAOA.USD;
      }else if(this.moedaB === "BRL"){
        this.cambioB = this.deafaultsAOA.BRL;
      }else{
        this.cambioB = this.deafaultsAOA.AOA;
      }
    }
  }

  defaultBA(){
    this.cambioB = 1
    if(this.moedaB === "EUR"){
      if(this.moedaA === "EUR"){
        this.cambioA = this.deafaultsEUR.EUR;
      }else if(this.moedaA === "USD"){
        this.cambioA = this.deafaultsEUR.USD;
      }else if(this.moedaA === "BRL"){
        this.cambioA = this.deafaultsEUR.BRL;
      }else{
        this.cambioA = this.deafaultsEUR.AOA;
      }
    }else if(this.moedaB === "USD"){
      if(this.moedaA === "EUR"){
        this.cambioA = this.deafaultsUSD.EUR;
      }else if(this.moedaA === "USD"){
        this.cambioA = this.deafaultsUSD.USD;
      }else if(this.moedaA === "BRL"){
        this.cambioA = this.deafaultsUSD.BRL;
      }else{
        this.cambioA = this.deafaultsUSD.AOA;
      }
    }else if(this.moedaB === "BRL"){
      if(this.moedaA === "EUR"){
        this.cambioA = this.deafaultsBRL.EUR;
      }else if(this.moedaA === "USD"){
        this.cambioA = this.deafaultsBRL.USD;
      }else if(this.moedaA === "BRL"){
        this.cambioA = this.deafaultsBRL.BRL;
      }else{
        this.cambioA = this.deafaultsBRL.AOA;
      }
    }else{
      if(this.moedaA === "EUR"){
        this.cambioA = this.deafaultsAOA.EUR;
      }else if(this.moedaA === "USD"){
        this.cambioA = this.deafaultsAOA.USD;
      }else if(this.moedaA === "BRL"){
        this.cambioA = this.deafaultsAOA.BRL;
      }else{
        this.cambioA = this.deafaultsAOA.AOA;
      }
    }
  }

  limpar(){
    this.cambioA = null;
    this.cambioB = null;
    this.valorA = null;
    this.valorB = null;
    this.moedaA = "EUR";
    this.moedaB = "EUR";
  }
}
