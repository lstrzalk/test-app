import { Component, OnInit, ElementRef, ViewChild, Inject, HostListener } from '@angular/core';
import { SearchService } from './search.service';
import { AutocompleteService } from './autocomplete.service';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  token: string;
  videos = [];
  autocompleteArray = [];
  filter = false;
  showAutocomplete = false;
  loadOffset = 0.70;
  filtersMap = {
    'order': '',
    'publishedAfter': '',
    'publishedBefore': '',
    'videoDefinition': '',
    'videoDimension': '',
    'videoDuration': '',
    'videoType': '',
    'part': 'snippet', // tells what we want in response
    'maxResults': '10',
    'type': 'video',
    'q' : ''
  };
  // tslint:disable-next-line:max-line-length
  constructor(private _searchService: SearchService, private _autocompleteService: AutocompleteService, @Inject(DOCUMENT) private _document: Document, private _route: ActivatedRoute) {
    if ( this._route.queryParams['q'] ) {
      this.filtersMap.q = this._route.queryParams['q'];
      this.searchFun();
    }
  }
  ngOnInit() {
  }
  // tslint:disable-next-line:max-line-length
  searchFun = () => this._searchService.search(this.filtersMap).subscribe( p => {
    this.token = p.nextPageToken;
    this.videos = p.items;
    console.log(p.items)
    this.filtersMap.q = '';
  }, err => console.log(err))
  getNextPage = () => this._searchService.nextPage(this.token, this.filtersMap).subscribe( p => {
    this.token = p.nextPageToken;
    this.videos.push(...p.items);
  }, err => console.log(err))
  getAutocomplete = (event) => this.filtersMap.q.length && event.code !== 'Enter' ?
  this._autocompleteService.autocomplete(this.filtersMap.q).subscribe(p => {
    this.autocompleteArray = p[1];
    this.showAutocomplete = true;
  }, err => console.log(err)) : this.autocompleteArray = []
  filterFun = () => this.filter = !this.filter;
  hideAutocomplete = () => this.showAutocomplete = false;
  choosenFromAutocomplete = (a) => {
    console.log(a);
    this.filtersMap.q = a;
    this.hideAutocomplete();
  }
}
