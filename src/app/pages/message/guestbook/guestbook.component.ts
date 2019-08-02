import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {GuestBookService} from '../service/guestbook-service';
import {DictionaryService} from '../../words/service/dictionary-service';

@Component({
  selector: 'ngx-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.scss'],
})
export class GuestbookComponent extends BaseComponent implements OnInit {

  constructor(private guestbookService: GuestBookService, private dictionaryService: DictionaryService,
              protected injector: Injector) {
    super(guestbookService, injector);
  }

  type: string = '';
  status: string = '';
  statuss: any = [{id: 0, name: '待审核'}, {id: 1, name: '审核不通过'}, {id: 2, name: '审核通过'}];
  isRecommend: string = '';
  types: any = [];
  typeDic: string = 'guestbook_type';

  ngOnInit() {
    this.search();
    this.loadTypes();
  }

  /**
   * 搜索
   */
  search() {
    this.setQueryParams('type', this.type);
    this.setQueryParams('status', this.status);
    this.setQueryParams('recommend', this.isRecommend);
    this.getPager(1);
  }

  /**
   * 加载留言类型
   */
  loadTypes() {
    this.dictionaryService.getDictionaryByType(this.typeDic).then(result => {
      this.types = result;
    });
  }

  /**
   * 推荐或取消留言
   * @param guestbookId
   * @param recommend
   */
  recommend(guestbookId: string, isRecommend: boolean) {
    const content = isRecommend ? '您确定要推荐该留言吗?' : '您确定要取消推荐该留言吗?';
    this.modalUtil.confirm('提示', content).then(r => {
      if (r) {
        this.guestbookService.recommend(guestbookId, isRecommend).then(() => {
          this.search();
        });
      }
    });
  }

  /**
   * 留言留言
   * @param status
   */
  verify(status: boolean, guestbookId) {
    const content = status ? '您确定要审核通过该留言吗?' : '您确定要审核不通过该留言吗?';
    this.modalUtil.confirm('提示', content).then(r => {
      if (r) {
        this.guestbookService.verify(status, [guestbookId]).then(() => {
          this.search();
        });
      }
    });
  }

  /**
   * 批量审核留言
   * @param status
   */
  verifyMutil(status: boolean) {
    const content = status ? '您确定要审核通过该留言吗?' : '您确定要审核不通过该留言吗?';
    this.modalUtil.confirm('提示', content).then(r => {
      if (r) {
        this.guestbookService.verify(status, this.selectItems).then(() => {
          this.search();
        });
      }
    });
  }

  /**
   * 留言回复
   */
  showReply(item) {
    item.show = true;
  }

  /**
   * 隐藏回复框
   * @param item
   */
  hideReply(item) {
    item.show = false;
  }

  /**
   * 回复
   * @param item
   */
  reply(item) {
    const replyData = {guestBookId: item.id, content: item.replyText};
    this.guestbookService.saveData(replyData).then(() => {
      this.toastUtil.showSuccess('回复成功!');
      this.hideReply(item);
      this.search();
    });
  }
}

