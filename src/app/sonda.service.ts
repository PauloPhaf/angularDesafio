import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SondaService {

sondaURL = 'http://localhost:60751/api/sonda';
private headers = new Headers({"Content-Type": "application/json"});

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.sondaURL}`);
  }

  enviar(dado: object = {}){
    return this.http.put<any[]>(`${this.sondaURL}`, JSON.stringify(dado), {headers: {"Content-Type": "application/json"}});
  }

  inserir(dado: object = {}){
    return this.http.post<any[]>(`${this.sondaURL}`, JSON.stringify(dado), {headers: {"Content-Type": "application/json"}});
  }

  deletar(){
    return this.http.delete<any[]>(`${this.sondaURL}`);
  }
}
