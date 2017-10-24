import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { AutocompleteService } from './autocomplete.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  token: string;
  videos = [];
  autocompleteArray = [];
  filtersMap = new Map([
    ['order', ''],
    ['publishedAfter', ''],
    ['publishedBefore', ''],
    ['videoDefinition', ''],
    ['videoDimension', ''],
    ['videoDuration', ''],
    ['videoType', ''],
    ['part', 'snippet'], // tells what we want in response
    ['maxResults', '50'],
    ['type', 'video']
  ]);
  constructor(private _searchService: SearchService, private _autocompleteService: AutocompleteService) { }

  ngOnInit() {
  }
  // tslint:disable-next-line:max-line-length
  searchFun = (keyword) => this._searchService.search(this.filtersMap.set('q', keyword)).subscribe( p => {
    this.token = p.nextPageToken;
    this.videos = p.items;
    console.log(p);
  }, err => console.log(err))
  getNextPage = () => this._searchService.nextPage(this.token).subscribe( p => {
    this.token = p.nextPageToken;
    this.videos.push(...p.items);
  }, err => console.log(err))
  getAutocomplete = (keyword, event) => keyword.length && event.code !== 'Enter' ?
      this._autocompleteService.autocomplete(keyword).subscribe(p => console.log(p), err => console.log(err)) : []
}
