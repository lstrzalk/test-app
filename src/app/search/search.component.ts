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
  constructor(private _searchService: SearchService, private _autocompleteService: AutocompleteService) { }

  ngOnInit() {
  }
  searchFun = (keyword) => this._searchService.search(keyword).subscribe( p => {
    this.token = p.nextPageToken;
    this.videos = [p.items];
  }, err => console.log(err))
  getNextPage = () => this._searchService.nextPage(this.token).subscribe( p => {
    this.token = p.nextPageToken;
    this.videos.push(...p.items);
  }, err => console.log(err))
  getAutocomplete = (keyword) => this._autocompleteService.autocomplete(keyword).subscribe(p => console.log(p), err => console.log(err));
}