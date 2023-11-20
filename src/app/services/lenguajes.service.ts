import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguajesService {

  url: string = "https://apii-5f0de-default-rtdb.firebaseio.com/v1/topLenguaje"

  constructor(private http: HttpClient) { }


  getLenguajes(): Observable<any>
  {
    let getUrl = this.url + ".json"
    return this.http.get(getUrl)
  }

  postLenguajes(body:any): Observable<any>
  {
    let posUrl = this.url + ".json"
    return this.http.post(posUrl, body)
  }

  deleteLenguajes(id:string): Observable<any>
  {
    
    let delUrl = this.url + "/" + id + ".json"
    return this.http.delete(delUrl)

  }

  updateLenguajes(id:string, body:any): Observable<any>
  {

    let updUrl = this.url + "/" + id + ".json"
    return this.http.put(updUrl, body)

  }
}
