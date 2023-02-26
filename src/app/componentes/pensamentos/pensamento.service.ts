import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly apiUrl = 'http://localhost:3000/pensamentos';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.httpClient.get<Pensamento[]>(this.apiUrl);
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.httpClient.post<Pensamento>(this.apiUrl, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.apiUrl}/${pensamento.id}`;
    return this.httpClient.put<Pensamento>(url, pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<Pensamento>(url);
  }

  buscarPordId(id: number): Observable<Pensamento> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Pensamento>(url); 
  }

}
