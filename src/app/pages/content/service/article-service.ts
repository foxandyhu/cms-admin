import {Injectable} from '@angular/core';
import {IBaseService} from '../../ibase.service';
import {HttpUtil} from '../../../core/utils/http';
import {AppApi} from '../../../core/app-api';
import {HttpParams} from '@angular/common/http';

/**
 * 文章Service
 */
@Injectable()
export class ArticleService implements IBaseService {

  constructor(private httpUtil: HttpUtil) {
  }

  delData(ids: Array<number>): Promise<any> {
    return this.httpUtil.post(AppApi.CONTENT.article_del, ids).then(response => {
      return Promise.resolve(response);
    });
  }


  getPager(params: Map<string, string>): Promise<any> {
    const httpParams: HttpParams = this.httpUtil.getHttpParams(params);
    const result: Promise<any> = this.httpUtil.get(AppApi.CONTENT.article_list, httpParams).then(response => {
      return Promise.resolve(response);
    });
    return result;
  }


  saveData(menu: any): Promise<boolean> {
    return this.httpUtil.post(AppApi.CONTENT.article_add, menu).then(() => {
      return Promise.resolve(true);
    });
  }


  editData(menu: any): Promise<boolean> {
    return this.httpUtil.post(AppApi.CONTENT.article_edit, menu).then(() => {
      return Promise.resolve(true);
    });
  }

  getData(id: any): Promise<any> {
    const url = AppApi.CONTENT.article_detail.replace('{:articleId}', id);
    return this.httpUtil.get(url).then(response => {
      return Promise.resolve(response);
    });
  }

  /**
   * 模型排序
   * @param upItemId
   * @param downItemId
   */
  sort(upItemId: string, downItemId: string): Promise<boolean> {
    return undefined;
  }

  /**
   * 推荐或取消文章
   * @param articleId
   * @param recommend
   */
  recommend(recommend: boolean, level: number, ids: any): Promise<boolean> {
    const url = AppApi.CONTENT.article_recommend.replace('{:recommend}', recommend + '')
      .replace('{:level}', level + '');
    return this.httpUtil.post(url, ids).then(() => {
      return Promise.resolve(true);
    });
  }

  /**
   * 审核文章
   * @param status
   */
  verify(status: boolean, ids: any): Promise<boolean> {
    const url = AppApi.CONTENT.article_verify.replace('{:status}', status + '');
    return this.httpUtil.post(url, ids).then(() => {
      return Promise.resolve(true);
    });
  }

  /**
   * 置顶文章
   * @param articleId
   * @param recommend
   */
  top(articleId: string, level: number, date: string): Promise<boolean> {
    const url = AppApi.CONTENT.article_top.replace('{:articleId}', articleId)
      .replace('{:level}', level + '');
    return this.httpUtil.post(url, {expired: date}).then(() => {
      return Promise.resolve(true);
    });
  }
}
