import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-system-res-tree',
  templateUrl: './res-tree.component.html',
  styleUrls: ['./res-tree.component.scss'],
})
export class ResTreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nodes = [{
    name: '根目录',
    children: [{
      name: '新闻',
    }, {
      name: '视频',
    }, {
      name: '视频',
    }, {
      name: '视频',
    }, {
      name: '视频',
    }],
  }];
}
