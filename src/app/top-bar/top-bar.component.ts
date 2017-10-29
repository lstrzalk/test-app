import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';
import { AutocompleteService } from '../viewer/search/autocomplete.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  titleBar = true;
  autocomplete = [];
  showAutocomplete = false;
  constructor( private _authGuardService: AuthGuardService, private _autocompleteService: AutocompleteService ) { }

  ngOnInit() {
  }
  changeBarView = () => this.titleBar = !this.titleBar;
  isLoggedIn = () => this._authGuardService ? this._authGuardService.getIsLoggedIn() : false;
  getAutocomplete = (keyword, event) => keyword.length && event.code !== 'Enter' ?
    this._autocompleteService.autocomplete(keyword).subscribe(p => {
      this.autocomplete = p[1];
      this.showAutocomplete = true;
    }, err => console.log(err)) : this.autocomplete = []
  hideAutocomplete = () => this.showAutocomplete = false;
}
