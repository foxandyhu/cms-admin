import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {AppApi} from '../../core/app-api';

@Component({
  selector: 'ngx-druid',
  templateUrl: './druid.component.html',
  styleUrls: ['./druid.component.scss'],
})
export class DruidComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {
  }

  iframe: any;

  ngOnInit() {
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(AppApi.ROOT_URI.concat('/druid'));
  }

}
