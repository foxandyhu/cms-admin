import {of as observableOf, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpUtil} from '../../core/utils/http';
import {LocalStorageUtil} from '../../core/utils/local-storage';
import {AppApi} from '../../core/app-api';

@Injectable()
export class UserService {

  private static USER_KEY: string = 'user';

  private users = {
    nick: {name: ' ', picture: 'assets/images/nick.png'},
  };

  constructor(private httpUtil: HttpUtil) {
  }

  /**
   * 获得当前登录用户信息
   */
  getUsers(): Observable<any> {
    const user = LocalStorageUtil.get(UserService.USER_KEY);
    if (user) {
      this.users.nick.name = JSON.parse(user)['userName'];
    }
    return observableOf(this.users);
  }

  /**
   * 用户登录
   * @param userName
   * @param password
   */
  login(userName: string, password: string): Promise<boolean> {
    const data = {userName: userName, password: password};
    return this.httpUtil.post(AppApi.USERS.login, data).then(response => {
      LocalStorageUtil.put(UserService.USER_KEY, JSON.stringify(response));
      return Promise.resolve(true);
    });
  }

  /**
   * 用户退出
   */
  logout(): Promise<boolean> {
    return this.httpUtil.get(AppApi.USERS.logout).then(() => {
      LocalStorageUtil.clear();
      return Promise.resolve(true);
    });
  }
}
