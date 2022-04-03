import { Injectable } from '@angular/core';

import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';

import { Observable ,  Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private httpClient: HttpClient) {
    }

  getData(url:any,body:any): Observable<any>{
      return this.httpClient.post(url,body);
    }
}