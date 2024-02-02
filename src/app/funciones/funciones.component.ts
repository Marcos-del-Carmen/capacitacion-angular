import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent implements OnInit {
  public numeroRandom: number;
  constructor() {
    this.numeroRandom = 0;
  }

  ngOnInit(): void {
    this.metodoMap();
    this.metodoRandom();
  }
  public metodoMap() {
    let numbers = [3, 4, 5, 10];
    let dobles = numbers.map(function(x) {
      console.log(x * 2);
      return x * 2;
    });
    console.log(dobles);
  }
  public metodoRandom() {
    return Math.round(Math.random() * 5);
  }
}
