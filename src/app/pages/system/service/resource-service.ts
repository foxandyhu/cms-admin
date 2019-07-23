import {Injectable} from '@angular/core';
import {HttpUtil} from '../../../core/utils/http';
import {AppApi} from '../../../core/app-api';
import {IBaseService} from '../../ibase.service';
import {HttpParams} from '@angular/common/http';

/**
 * 系统资源Service
 */
@Injectable()
export class ResourceService implements IBaseService {

  constructor(private httpUtil: HttpUtil) {
  }

  delData(ids: Array<number>): Promise<any> {
    return this.httpUtil.post(AppApi.SYSTEM.resource_del, ids).then(response => {
      return Promise.resolve(response);
    });
  }


  getPager(params: Map<string, string>): Promise<any> {
    return undefined;
  }


  saveData(menu: any): Promise<boolean> {
    return undefined;
  }


  editData(menu: any): Promise<boolean> {
    return undefined;
  }

  getData(id: any): Promise<any> {
    return undefined;
  }

  /**
   * 获得资源列表
   */
  getResource(path: string): Promise<any> {
    let params: HttpParams = new HttpParams();
    params = params.set('target', path);
    return this.httpUtil.get(AppApi.SYSTEM.resource_list, params).then(response => {
      return Promise.resolve(response);
    });
  }

  /**
   * 新建目录
   * @param path
   * @param name
   */
  mkdir(path: string, name: string): Promise<any> {
    let params: HttpParams = new HttpParams();
    params = params.set('path', path).set('name', name);
    return this.httpUtil.post(AppApi.SYSTEM.resource_mkdir, params).then(response => {
      return Promise.resolve(response);
    });
  }

  /**
   * 上传文件
   * @param path
   */
  uploadFile(path: string, file: any): Promise<boolean> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', path);
    return this.httpUtil.post(AppApi.SYSTEM.resource_upload, formData).then(response => {
      return Promise.resolve(true);
    });
  }
}
