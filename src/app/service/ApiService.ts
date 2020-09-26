import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class APIService {
    BaseUrl="https://id.safav2.io.safavisa.com";

    options: {
        headers?: HttpHeaders | {[header: string]: string | string[]},
        observe?: 'body' | 'events' | 'response',
        params?: HttpParams|{[param: string]: string | string[]},
        reportProgress?: boolean,
        responseType?: 'arraybuffer'|'blob'|'json'|'text',
        withCredentials?: boolean,
      }

       
      
  constructor(private http: HttpClient) { }

  public post(url,data): Observable<any[]>{
       return this.http.post(this.BaseUrl+url, data).pipe((res:any)=>res)
    
   }
}