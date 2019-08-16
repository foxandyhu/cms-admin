import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

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
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl('http://192.168.8.113/druid');
  }

}
