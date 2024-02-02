import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import {FormsModule} from '@angular/forms';
import { FuncionesComponent } from './funciones/funciones.component';
import { ConsumirApiComponent } from './consumir-api/consumir-api.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    SegundoComponenteComponent,
    FuncionesComponent,
    ConsumirApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
