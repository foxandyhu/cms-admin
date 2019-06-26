import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorageUtil} from '../../core/utils/local-storage';

@Injectable({providedIn: 'root'})
export class HeaderInterceptor implements HttpInterceptor {

  private USER_KEY: string = 'user';

  /**
   * 为HTTP头赋值
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let app_auth = LocalStorageUtil.get(this.USER_KEY);
    app_auth = app_auth ? JSON.parse(app_auth)['_app_auth_'] : '';
    req = req.clone({headers: req.headers.set('_app_auth_', app_auth)});
    return next.handle(req);
  }
}
