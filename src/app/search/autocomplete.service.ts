import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams, Jsonp } from '@angular/http';
import 'rxjs/add/observable/throw';

@Injectable()
export class AutocompleteService {
  baseURL = 'http://suggestqueries.google.com/complete/search';

  constructor(private _jsonp: Jsonp) { }

  autocomplete = (keyword) => {
      let params: URLSearchParams = new URLSearchParams();
      params.set('q', keyword);
      params.set('ds', 'yt');
      params.set('jsonp', 'JSONP_CALLBACK');
      params.set('client', 'youtube');
      return this._jsonp.request(this.baseURL, {
        search: params
      }).map(res => res.json())
        .catch(err => Observable.throw(err));
  }
}
