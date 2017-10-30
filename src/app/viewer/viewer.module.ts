import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonpModule } from '@angular/http';
import { SearchService } from './search/search.service';
import { AutocompleteService } from './search/autocomplete.service';
import { ViewerComponent } from './viewer.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { ResultService } from './result/result.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './search/filter/filter.component';
import { VideosListComponent } from './search/videos-list/videos-list.component';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    JsonpModule,
    RouterModule,
  ],
  declarations: [ViewerComponent, SearchComponent, ResultComponent, FilterComponent, VideosListComponent],
  providers: [SearchService, AutocompleteService, ResultService]
})
export class ViewerModule { }
