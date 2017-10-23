import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/observable/throw';

@Injectable()
export class AutocompleteService {
  baseURL = 'http://suggestqueries.google.com/complete/search';

  constructor(private _http: Http) { }

  autocomplete = (keyword) => {
    let params: URLSearchParams = new URLSearchParams();
    params.set('q', keyword);
    params.set('ds', 'yt');
    params.set('jsonp', 'autocompleteCallback');
    params.set('client', 'youtube');
    return this._http.get(this.baseURL, {
      search: params
    }).map(res => res.json())
      .catch(err => Observable.throw(err));
  }


}
