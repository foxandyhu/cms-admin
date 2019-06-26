import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor,
  HttpRequest, HttpResponse,
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ModalService} from '../../@theme/components';

@Injectable({providedIn: 'root'})
export class LoginInterceptor implements HttpInterceptor {

  private LOGIN_ROUTER: string = 'login';

  constructor(private router: Router, private modalService: ModalService) {
  }

  /**
   * HTTP 接口拦截校验是否登录
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
  }

  private handleError(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
    switch (event.status) {
      case 401:
        this.modalService.show('', '未登录');
        this.router.navigate([this.LOGIN_ROUTER]);
        return of(event);
      default:
        this.modalService.show('', event['error']['message']);
    }
    return throwError(event);
  }
}
