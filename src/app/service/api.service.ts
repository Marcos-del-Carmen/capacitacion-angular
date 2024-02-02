import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = 'https://rickandmortyapi.com/api/character/11,12,13,14,15,16,17,18';
  private urlApi1 = 'https://rickandmortyapi.com/api/character/1,2,3,4';
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
  getData1(): Observable<any> {
    return this.http.get<any>(this.urlApi1);
  }
  public metodoRandom() {
    let numRan = Math.round(Math.random() * 10);
    console.log(numRan);
  }
}
