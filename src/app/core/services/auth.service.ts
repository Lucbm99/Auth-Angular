import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'http://localhost:3000';

  constructor(
    private _httpClient: HttpClient
  ) { }
  
  public sign(payload: { email: string, password: string }): Observable<any> {
    return this._httpClient.post(`${this.url}/sign`, payload)
      .pipe(
        map((res) => {
          console.log(res);
        }),
        catchError((e) => {
          if(e.error.message) return throwError('Usuário ou senha incorreta!');

          return throwError(
              'No momento, não estamos conseguindo validar estes dados. Tente novamente mais tarde!');
          // return throwError('Usuário ou senha incorreta!');
        })
      )
  }
}
