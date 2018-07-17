import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  private baseUrl: string="http://localhost:9001/api/";
  constructor(public http: HttpClient) { 

  }


  getRequest(url : string){
    url=this.baseUrl+url;

  }


  postRequest(url, reqObj: any): Observable<any>{
    url=this.baseUrl+url;
    return this.http.post(url,JSON.stringify(reqObj))
    .map((res: Response)=>{ return res.json})
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    alert('Error:'+error.statusText);
    return Observable.throw(error.statusText);
  }


  updateRequest(){

  }
}
