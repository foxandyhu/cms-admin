import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../base-component';
import {AdService} from './service/ad.service';

@Component({
  selector: 'ngx-ad',
  templateUrl: './ad.component.html',
})
export class AdComponent extends BaseComponent implements OnInit {

  constructor(private adService: AdService, protected injector: Injector) {
    super(adService, injector);
  }

  ngOnInit() {
    this.getPager(1);
  }

}
