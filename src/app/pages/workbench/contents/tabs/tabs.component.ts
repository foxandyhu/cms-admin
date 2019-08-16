import {Component, Input, OnInit} from '@angular/core';
import {Constant} from '../../../../core/constant';

@Component({
  selector: 'ngx-contents-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class ContentTabsComponent implements OnInit {

  constructor() {
  }

  @Input() private members: any;
  @Input() private comments: any;
  @Input() private guestBooks: any;
  private preview = Constant.DEFAULT_PIC;

  ngOnInit() {
  }

}
