import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators";

import { CategoriaService } from "../categorias/categoria.service";

import { Lancamento } from "./lancamento.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  private apiPath: string = environment.entryPath;

  constructor(private http: HttpClient) { }


  getAll(): Observable<Lancamento[]> {
    console.log(this.apiPath);

    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToLancamentos)
    )
  }

  getById(id: number): Observable<Lancamento> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToLancamento)
    )
  }

  create(lancamento: Lancamento): Observable<Lancamento> {
    return this.http.post(this.apiPath, lancamento).pipe(
      catchError(this.handleError),
      map(this.jsonDataToLancamento)
    );
  }

  update(lancamento: Lancamento): Observable<Lancamento> {
    const url = `${this.apiPath}/${lancamento.id}`;

    return this.http.put(url, lancamento).pipe(
      catchError(this.handleError),
      map(() => lancamento)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )
  }



  // PRIVATE METHODS

  private jsonDataToLancamentos(jsonData: any[]): Lancamento[] {
    const lancamentos: Lancamento[] = [];

    jsonData.forEach(element => {
      const lancamento = Object.assign(new Lancamento(), element);
      lancamentos.push(lancamento);
    });

    return lancamentos;
  }

  private jsonDataToLancamento(jsonData: any): Lancamento {
    return Object.assign(new Lancamento(), jsonData);
  }

  private handleError(error: any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }
}
