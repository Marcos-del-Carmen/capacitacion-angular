import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})

export class SegundoComponenteComponent implements OnInit {
  public btnSeleccionado?: number;
  public mensaje?: string;
  constructor() {}
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  public btnColor(opc: number) {
    this.btnSeleccionado = opc;
    switch (opc) {
      case 1:
        this.mensaje = 'Se preciono el boton 1';
        console.log('se preciono el boton 1');
        break;
      case 2:
        this.mensaje = 'Se preciono el boton 2';
        console.log('se preciono el boton 2');
        break;
      case 3:
        this.mensaje = 'Se preciono el boton 3';
        console.log('se preciono el boton 3');
        break;
      case 4:
        this.mensaje = 'Se preciono el boton 4';
        console.log('se preciono el boton 4');
        break;
      default:
        console.log('Esta opción no esta disponible');
    }
  }
}
