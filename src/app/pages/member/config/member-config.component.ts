import { Component, OnInit } from '@angular/core';
import '../../../@theme/components/editor.loader';

@Component({
  selector: 'ngx-member-config',
  templateUrl: './member-config.component.html',
  styleUrls: ['./member-config.component.scss'],
})
export class MemberConfigComponent implements OnInit {

  tabs: any[] = [
    {
      title: '登录设置',
      route: '/member/config/login',
    },
    {
      title: '注册设置',
      route: '/member/config/register',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
