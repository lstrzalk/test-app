import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './search.service';
import { AutocompleteService } from './autocomplete.service';
import { JsonpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    JsonpModule
  ],
  declarations: [],
  providers: [SearchService, AutocompleteService]
})
export class SearchModule { }
