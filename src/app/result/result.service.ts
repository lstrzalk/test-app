import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/observable/throw';
import { VideoInterface} from './videoInterface';

@Injectable()
export class ResultService {
  baseURL = 'https://www.googleapis.com/youtube/v3/videos'; // https://developers.google.com/youtube/v3/docs/videos/list
  videoURL = 'https://www.youtube.com/embed/';
  token = 'AIzaSyB1zsdBORbUDePms4PJRllZ1pAqoFCqyMI';

  constructor(private _http: Http) { }

  getVideoDetails = (id) => {
    let params: URLSearchParams = new URLSearchParams();
    params.set('part', 'snippet'); // query - add to filering and check if not empty
    params.set('key', this.token); // API key
    params.set('id', id); // API key
    return this._http.get(this.baseURL, {
      search: params
    }).map(res => res.json())
      .map(this.parserVideoData)
      .catch(err => Observable.throw(err));
  }

  parserVideoData = (res): VideoInterface => {
    const snippet = res.items[0].snippet;
    const video: VideoInterface = {
      'id': res.items[0].id,
      'title': snippet.title,
      'description': snippet.description,
      'channelTitle': snippet.channelTitle,
      'publishedAt': new Date(snippet.publishedAt),
      'tags': snippet.tags,
      'url': `${this.videoURL}/${res.items[0].id}`
    };
    return video;
  }

}
