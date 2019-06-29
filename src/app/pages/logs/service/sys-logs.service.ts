import {Injectable} from '@angular/core';
import {HttpUtil} from '../../../core/utils/http';
import {AppApi} from '../../../core/app-api';
import {HttpParams} from '@angular/common/http';

@Injectable()
export class SysLogsService {

  constructor(private httpUtil: HttpUtil) {
  }

  /**
   * 日志列表
   */
  getAllSysLogs(category: string, pageNo: number): Promise<any> {
    let params: HttpParams = new HttpParams().set('pageNo', pageNo.toString());
    if (category) {
      params = params.set('category', category);
    }
    const result: Promise<any> = this.httpUtil.get(AppApi.LOGS.sys_logs_list, params).then(response => {
      return Promise.resolve(response);
    });
    return result;
  }

  /**
   * 删除系统日志
   */
  delSysLogs(ids: Array<number>): Promise<any> {
    return this.httpUtil.post(AppApi.LOGS.sys_logs_del, ids).then(response => {
      return Promise.resolve(response);
    });
  }
}
