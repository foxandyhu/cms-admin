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

  @Input() members: any;
  @Input() comments: any;
  @Input() guestBooks: any;
  private preview = Constant.DEFAULT_PIC;

  ngOnInit() {
  }

}
