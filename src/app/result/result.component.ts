import { Component, OnInit } from '@angular/core';
import { ResultService } from './result.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  videoDetails;
  constructor(private _resultService: ResultService, private _route: ActivatedRoute, private _domSanitizer: DomSanitizer) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this._route.params.subscribe( p => this._resultService.getVideoDetails(p['id']).subscribe(r => this.videoDetails = r, err => console.log(err)));
  }

  prepareUrl = () => this._domSanitizer.bypassSecurityTrustResourceUrl(this.videoDetails.url);

}
