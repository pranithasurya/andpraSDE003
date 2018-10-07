import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';

import {Observable, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataretrieverService {
  url: string = 'http://localhost:4300'

  constructor(private http: HttpClient) { }

  getData(endpoint:string): Observable<any>{
  	return this.http.get(this.url+endpoint)
  					.pipe(
  						map((e:Response)=> e),
  						catchError((e:Response) => []));

  }

}
