import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {
  @Input() videos;
  @Input() filter;
  @Output() getNextPage: EventEmitter<boolean> = new EventEmitter<boolean>()
  loadOffset = 0.70;
  constructor( private _router: Router) { }

  ngOnInit() {
  }
  goToDetails = (id) => this._router.navigate(['/viewer/result', id]);
  showDescription = () => window.screen.width > 480;
  onScroll = (e) => {
    if ( parseFloat(Number(e.path[0].scrollTop / e.path[0].scrollHeight).toFixed(2)) > this.loadOffset ) {
      this.getNextPage.emit(true);
    }
  }
  get

}
