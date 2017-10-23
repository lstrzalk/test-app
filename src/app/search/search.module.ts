import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './search.service';
import { AutocompleteService } from './autocomplete.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SearchService, AutocompleteService]
})
export class SearchModule { }
