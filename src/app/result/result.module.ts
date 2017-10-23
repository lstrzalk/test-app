import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResultComponent, DetailsComponent]
})
export class ResultModule { }
