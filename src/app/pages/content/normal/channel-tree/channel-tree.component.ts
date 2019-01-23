import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-channel-tree',
  templateUrl: './channel-tree.component.html',
})
export class ChannelTreeComponent implements OnInit {

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
