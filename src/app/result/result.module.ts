import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { ResultService } from './result.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResultComponent],
  providers: [ResultService],
  exports: []
})
export class ResultModule { }
