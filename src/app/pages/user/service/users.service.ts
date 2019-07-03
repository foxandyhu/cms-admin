import {of as observableOf, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpUtil} from '../../../core/utils/http';
import {LocalStorageUtil} from '../../../core/utils/local-storage';
import {AppApi} from '../../../core/app-api';
import {HttpParams} from '@angular/common/http';
import {IBaseService} from '../../ibase.service';

@Injectable()
export class UserService implements IBaseService {

  private static USER_KEY: string = 'user';

  private users = {
    nick: {name: ' ', picture: 'assets/images/nick.png'},
  };

  constructor(private httpUtil: HttpUtil) {
  }

  /**
   * 获得当前登录用户信息
   */
  getCurrentUser(): Observable<any> {
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
      if (!response) {
        return Promise.resolve(false);
      }
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

  /**
   * 用户列表
   */
  getPager(params: Map<string, string>): Promise<any> {
    let httpParams: HttpParams = new HttpParams();
    if (params) {
      params.forEach((value, key, map) => {
        httpParams = httpParams.set(key, value);
      });
    }
    const result: Promise<any> = this.httpUtil.get(AppApi.USERS.user_list, httpParams).then(response => {
      return Promise.resolve(response);
    });
    return result;
  }

  /**
   * 删除系统用户
   */
  delData(ids: Array<number>): Promise<any> {
    return this.httpUtil.post(AppApi.USERS.user_del, ids).then(response => {
      return Promise.resolve(response);
    });
  }
}
