import { Component, OnInit } from '@angular/core';
import { random } from 'lodash';
@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {
  public nombre: string;
  public apellido: string;
  public usuario: Array<string>;
  public bandera: boolean;
  public diasSeleccionados: any;
  public siglo: any;
  public arrayAux: any;
  public diasSemana: any = [
    {dia: 'Todos los lunes',     diaSolo: 'Lunes'},
    {dia: 'Todos los martes',    diaSolo: 'Martes'},
    {dia: 'Todos los miercoles', diaSolo: 'Miercoles'},
    {dia: 'Todos los jueves',    diaSolo: 'Jueves'},
    {dia: 'Todos los viernes',   diaSolo: 'Viernes'},
    {dia: 'Todos los sabado',    diaSolo: 'Sabado'},
    {dia: 'Todos los domingo',   diaSolo: 'Domingo'}
  ];
  public anioSelecionado: any;
  constructor() {
    this.usuario = ['Marcos', '22', '7561146892', 'marcos@gmail.com'];
    this.nombre = '';
    this.apellido = '';
    this.bandera = false;
    this.anioSelecionado = 0;
  }
  ngOnInit(): void {
    this.nombre = 'Marcos Sánchez';
    this.apellido = 'Sánchez';
    this.diasSeleccionados = 'N/A';
    // console.log(this.diasSemana[0].dia);
    // this.funcion1();
    // this.mostrarAnio();
  }
  public cambiarNombre() {
    this.nombre = 'Andrea';
    this.nombre = this.nombre + ' ' + this.apellido;
    this.bandera = true;

    // console.log('hola ' + this.nombre);
  }
  public funcion1() {
    let i: number = 0;
    let acumulador: number = 0;
    this.diasSemana.forEach((elemento: any) => {
      i++;
      acumulador = acumulador + i;
      elemento.id = acumulador;
    });
  }
  public mostrarArrayMod() {
      // console.log(this.diasSemana);
  }
  public mostrarAnio() { /* Este es un metodo que calcula los siglos dependiendo el año ingresado */
    this.siglo = Math.ceil(this.anioSelecionado / 100);
    // console.log('El siglo ' + this.siglo + ' del año ' + this.anioSelecionado);
  }

  public miFuncion2() {
    this.arrayAux = this.diasSemana.map((dia: any) => {
      const nuevoDia = { ...dia};

      nuevoDia.id2 = random(1, 10);
      return nuevoDia;
    });
    // console.log('Arreglo original ' , this.diasSemana);
    // console.log('Arreglo con la funcion map ' , this.arrayAux);
  }
}
