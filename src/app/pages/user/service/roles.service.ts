import {Injectable} from '@angular/core';
import {HttpUtil} from '../../../core/utils/http';
import {AppApi} from '../../../core/app-api';
import {IBaseService} from '../../ibase.service';

@Injectable()
export class RoleService implements IBaseService {

  constructor(private httpUtil: HttpUtil) {
  }

  delData(ids: Array<number>): Promise<any> {
    return undefined;
  }

  getPager(params: Map<string, string>): Promise<any> {
    return undefined;
  }

  /**
   * 获得所有角色集合
   */
  getRoles(): Promise<Array<any>> {
    return this.httpUtil.get(AppApi.USERS.role_all).then(response => {
      return Promise.resolve(response);
    });
  }
}
