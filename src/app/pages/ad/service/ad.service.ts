import {Injectable} from '@angular/core';
import {HttpUtil} from '../../../core/utils/http';
import {AppApi} from '../../../core/app-api';
import {HttpParams} from '@angular/common/http';
import {IBaseService} from '../../ibase.service';

@Injectable()
export class AdService implements IBaseService {

  constructor(private httpUtil: HttpUtil) {
  }

  getPager(params: Map<string, string>): Promise<any> {
    const httpParams: HttpParams = this.httpUtil.getHttpParams(params);
    const result: Promise<any> = this.httpUtil.get(AppApi.AD.ad_list, httpParams).then(response => {
      return Promise.resolve(response);
    });
    return result;
  }

  delData(ids: Array<number>): Promise<any> {
    return this.httpUtil.post(AppApi.AD.ad_del, ids).then(response => {
      return Promise.resolve(response);
    });
  }

  editData(data: any): Promise<boolean> {
    return this.httpUtil.post(AppApi.AD.ad_edit, data).then(response => {
      return Promise.resolve(true);
    });
  }

  saveData(data: any): Promise<boolean> {
    return this.httpUtil.post(AppApi.AD.ad_add, data).then(response => {
      return Promise.resolve(true);
    });
  }

  getData(id: any): Promise<any> {
    const url = AppApi.AD.ad_detail.replace('{:adId}', id);
    return this.httpUtil.get(url).then(response => {
      return Promise.resolve(response);
    });
  }

  sort(upItemId, downItemId): Promise<boolean> {
    return undefined;
  }
}
