import { Component } from '@angular/core';

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
}
