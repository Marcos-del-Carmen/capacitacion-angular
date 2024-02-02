import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api.service';
import {random} from 'lodash';

@Component({
  selector: 'app-consumir-api',
  templateUrl: './consumir-api.component.html',
  styleUrls: ['./consumir-api.component.css']
})

export class ConsumirApiComponent implements OnInit {
  public arrayAux: any;
  public arrayAux1: any;
  public estado = false;
  public font2 = '/assets/images/font2.jpg';
  public font3 = '/assets/images/font3.jpg';
  public font4 = '/assets/images/font4.jpg';
  public imagen = '/assets/images/default.jpg';
  public textImg = 'Rick And Morty';
  data: any[] = []; // esto es un conjunto de datos y no solo un arreglo
  data1: any[] = [];
  constructor(private apiService: ApiService) {  }
  ngOnInit(): void {
    this.llenarData();
    this.llenarData1();
    // this.mostrarInfo();
    // this.miFuncion2();
  }
  public llenarData() {
    this.apiService.getData().subscribe( data => {
      this.data = data;
    });
  } // con este metodo llenamos el arreglo para que tenga datos en tipo JSON
  public llenarData1() {
    this.apiService.getData1().subscribe(data => {
      this.data1 = data;
    });
  } // llenamos un segundo metodo para mostrar por defecto a algunos personajes
  public mostrarInfo() {
    this.estado = true;
    console.log(this.estado);
    this.arrayAux = this.data.map((obj1: any) => {
      const nuevo = { ...obj1};
      if (nuevo.status === 'Alive') {
        nuevo.status = 'Vivo';
      }
      if (nuevo.status === 'unknown') {
        nuevo.status = 'Desconocido';
      }
      if (nuevo.status === 'Dead') {
        nuevo.status = 'Muerto';
      }
      return nuevo;
    });
    console.log('Arreglo original ' , this.data);
    console.log('Arreglo con la funcion map ' , this.arrayAux);
  } // mostramos a mas personajes cuando precionamos un boton
  public esenario(opc: number) {
      switch (opc) {
        case 1:
          this.imagen = '/assets/images/esenario1.jpg';
          this.textImg = 'La fiesta se salio de control';
          break;
        case 2:
          this.imagen = '/assets/images/esenario2.jpg';
          this.textImg = 'El sol que chilla';
          break;
        case 3:
          this.imagen = '/assets/images/esenario3.jpg';
          this.textImg = 'Froopyland';
          break;
        case 4:
          this.imagen = '/assets/images/esenario4.jpg';
          this.textImg = 'Parque anatomico';
          break;
      }
  }
}
