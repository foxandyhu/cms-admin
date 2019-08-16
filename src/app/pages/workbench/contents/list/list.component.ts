import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-contents-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ContentListComponent implements OnInit {

  constructor() {
  }

  @Input() clickTops: any;
  @Input() commentTops: any;

  ngOnInit() {
  }

}
