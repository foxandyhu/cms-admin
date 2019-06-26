import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorageUtil} from '../../core/utils/local-storage';
import {AppApi} from '../app-api';

/**
 * 为每个HTTP头部信息添加自定义头信息
 */
@Injectable({providedIn: 'root'})
export class HeaderInterceptor implements HttpInterceptor {

  private USER_KEY: string = 'user';

  /**
   * 为HTTP头赋值
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.setApiUrl(req);
    req = this.setHeader(req);
    return next.handle(req);
  }

  private setApiUrl(req: HttpRequest<any>): HttpRequest<any> {
    let url = req.url;
    if (url.startsWith('/manage')) {  // 后台接口
      url = AppApi.ROOT_URI.concat(url);
      req.url = url;
    }
    return req;
  }

  /**
   * 设置头信息
   * @param req
   */
  private setHeader(req: HttpRequest<any>): HttpRequest<any> {
    let app_auth = LocalStorageUtil.get(this.USER_KEY);
    app_auth = app_auth ? JSON.parse(app_auth)['_app_auth_'] : '';
    req = req.clone({headers: req.headers.set('_app_auth_', app_auth)});
    return req;
  }
}
