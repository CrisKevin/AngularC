import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  url: string = "https://apii-5f0de-default-rtdb.firebaseio.com/v1/topLenguaje.json"

  constructor(private http: HttpClient) { }


  getLenguajes(): Observable<any>
  {
    return this.http.get(this.url)
  }
}
