import {Component, Injector, OnInit} from '@angular/core';
import {UserService} from './service/users.service';
import {BaseComponent} from '../base-component';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
})
export class UserComponent extends BaseComponent implements OnInit {

  constructor(private userService: UserService, protected injector: Injector) {
    super(userService, injector);
  }

  ngOnInit() {
    this.getPager(1);
  }

  /**
   * 根据不同状态类型查询
   */
  changeStatus(status: string) {
    this.setQueryParams('status', status);
    this.getPager(1);
  }
}
