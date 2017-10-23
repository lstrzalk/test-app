import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JsonDataService {
  constructor(private _http: Http) {}
  public getData = (): Observable<any> => this._http.get('./assets/data.json')
                        .map(res => res.json()).catch(err => Observable.throw(err))

}
