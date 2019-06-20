import { Component, OnInit } from '@angular/core';
import '../../../@theme/components/editor.loader';

@Component({
  selector: 'ngx-system-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberSettingComponent implements OnInit {

  tabs: any[] = [
    {
      title: '登录设置',
      route: '/system/setting/member/login',
    },
    {
      title: '注册设置',
      route: '/system/setting/member/register',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
