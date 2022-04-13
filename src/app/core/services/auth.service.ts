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
  
  public signIn(payload: { email: string, password: string}): Observable<any> {
    return this._httpClient.post(`${this.url}/signIn`, payload)
      .pipe(
        map((data) => {
        }),
        catchError((error) => {
          console.log(error);
          return throwError(() => error.error.message);
        })
      )
  }
}
