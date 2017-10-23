import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/observable/throw';

@Injectable()
export class SearchService {
  baseURL = 'https://www.googleapis.com/youtube/v3/search'; // https://developers.google.com/youtube/v3/docs/search/list
  token = 'AIzaSyB1zsdBORbUDePms4PJRllZ1pAqoFCqyMI';

  constructor(private _http: Http) { }

  search = (keyword) => {
    let params: URLSearchParams = new URLSearchParams();
    params.set('q', keyword);
    params.set('part', 'snippet');
    params.set('maxResults', '20');
    params.set('key', this.token);
    return this._http.get(this.baseURL, {
      search: params
    }).map(res => res.json())
      .catch(err => Observable.throw(err));
  }

nextPage = (token) => {
  let params: URLSearchParams = new URLSearchParams();
  params.set('pageToken', token);
  params.set('part', 'snippet');
  params.set('maxResults', '20');
  params.set('key', this.token);
  return this._http.get(this.baseURL, {
    search: params
  }).map(res => res.json())
    .catch(err => Observable.throw(err));
}


}
