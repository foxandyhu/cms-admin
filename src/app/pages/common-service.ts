import {HttpUtil} from '../core/utils/http';
import {AppApi} from '../core/app-api';
import {Injectable} from '@angular/core';

/**
 * 公共的Service主要是一些通用的方法
 */
@Injectable({providedIn: 'root'})
export class CommonService {

  constructor(private httpUtil: HttpUtil) {
  }

  /**
   * 图片上传
   */
  uploadFile(file: any): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.httpUtil.post(AppApi.FILES.file_upload, formData).then(response => {
      return Promise.resolve(response);
    });
  }
}
