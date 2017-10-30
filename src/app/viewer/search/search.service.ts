import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/observable/throw';

@Injectable()
export class SearchService {
  baseURL = 'https://www.googleapis.com/youtube/v3/search'; // https://developers.google.com/youtube/v3/docs/search/list
  token = 'AIzaSyC1NKGYNAOxXa_TVbjZcCISIHWNTizafwM';

  constructor(private _http: Http) { }

  search = (filtersMap) => {
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.token);
    for(let key of Object.keys(filtersMap)){
      if ( filtersMap[key]  ) {
        if ( key.includes('published') ) {
          params.set(key, new Date(filtersMap[key]).toISOString());
        } else {
          params.set(key, filtersMap[key]);
        }
      }
    }

    return this._http.get(this.baseURL, {
      search: params
    }).map(res => res.json())
      .map(this.parseVideos)
      .catch(err => Observable.throw(err));
  }

nextPage = (nextPageToken, filtersMap) => {
  let params: URLSearchParams = new URLSearchParams();
  params.set('pageToken', nextPageToken);
  console.log(nextPageToken)
  for(let key of Object.keys(filtersMap)){
    if ( filtersMap[key]  ) {
      if ( key.includes('published') ) {
        params.set(key, new Date(filtersMap[key]).toISOString());
      } else {
        params.set(key, filtersMap[key]);
      }
    }
  }
  params.set('key', this.token);
  return this._http.get(this.baseURL, {
    search: params
  }).map(res => res.json())
    .map(this.parseVideos)
    .catch(err => Observable.throw(err));
}

parseVideos = (videos) => {
  for ( let i = 0; i < videos.items.length; i++) {
    videos.items[i].snippet['id'] = videos.items[i].id.videoId;
    videos.items[i] = videos.items[i].snippet;
    if ( window.screen.width < 480 ) {
      videos.items[i].thumbnails = videos.items[i].thumbnails.default.url;
    } else if ( window.screen.width >= 480 && window.screen.width < 1080 ) {
      videos.items[i].thumbnails = videos.items[i].thumbnails.medium.url;
    } else {
      videos.items[i].thumbnails = videos.items[i].thumbnails.high.url;
    }
  }
  return videos;
}

}
