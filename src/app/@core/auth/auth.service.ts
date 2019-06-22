import {Injectable} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService implements HttpInterceptor {

  /**
   * 登录后返回的标识字符串存储于本地浏览器,用来校验是否登录
   */
  private LOGIN_KEY: string = 'LOGIN_KEY';
  private LOGIN_ROUTER: string = 'login';

  constructor(private router: Router) {
    this.init();
  }

  private init() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.checkLocalAuth(event.url);
      }
    });
  }

  /**
   * 校验本地是否存在登录标识防止直接访问页面
   * @param url
   */
  private checkLocalAuth(url: string): boolean {
    if ('/login' !== url) {
      const key = localStorage.getItem(this.LOGIN_KEY);
      if (!key) {
        this.router.navigate([this.LOGIN_ROUTER]);
        return false;
      }
    }
    return true;
  }

  /**
   * HTTP 接口拦截校验是否登录
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        console.log(11);
        if (event.body.code === 401) {
          this.router.navigate([this.LOGIN_ROUTER]);
        }
      }
    }));
  }
}
