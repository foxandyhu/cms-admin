import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {ArticleService} from '../service/article-service';
import {Router} from '@angular/router';
import {NbDialogService} from '@nebular/theme';
import {ArticleTopComponent} from './top/top.component';
import {DateUtil} from '../../../core/utils/date';

@Component({
  selector: 'ngx-normal',
  templateUrl: './article.component.html',
})
export class ArticleComponent extends BaseComponent implements OnInit {

  constructor(private articleService: ArticleService, protected injector: Injector, private router: Router,
              private dialogService: NbDialogService) {
    super(articleService, injector);
  }

  private types: Array<any> = [{id: 1, name: '普通'}, {id: 2, name: '图文'},
    {id: 3, name: '焦点'}, {id: 4, name: '头条'}]; //  内容类型
  private statuss: Array<any> = [{id: 0, name: '草稿'}, {id: 1, name: '待审核'}, {id: 2, name: '审核通过'},
    {id: 3, name: '审核未通过'}];      //  状态
  private channel: string;            //  树状栏目选中
  private searchType: string = '';    //  搜索类型
  private searchStatus: string = '';  //  搜索状态
  private searchTitle: string = '';   //  搜索标题
  private searchChannel: string = ''; //  搜索栏目
  private dialogTop: any;              //  文章置顶框

  ngOnInit() {
    this.search();
  }

  /**
   * 得到选中的栏目
   * @param channel
   */
  getChannel(channel: string) {
    this.channel = channel;
    const channelId = this.channel ? this.channel['id'] : null;
    this.searchChannel = channelId === 0 ? null : channelId;
    this.search();
  }

  /**
   * 跳转到添加内容页面
   */
  toAddArticle() {
    if (!this.channel || this.channel['id'] <= 0) {
      this.toastUtil.showDanger('请选择栏目!');
      return;
    }
    this.router.navigate(['/content/article/add']);
  }

  /**
   * 搜索
   */
  search() {
    this.setQueryParams('type', this.searchType);
    this.setQueryParams('status', this.searchStatus);
    this.setQueryParams('title', this.searchTitle);
    this.setQueryParams('channelId', this.searchChannel);
    this.getPager(1);
  }

  /**
   * 推荐或取消评论
   * @param commentId
   * @param recommend
   */
  recommendMutil(isRecommend: boolean) {
    const content = isRecommend ? '您确定要推荐该评论吗?' : '您确定要取消推荐该评论吗?';
    this.modalUtil.confirm('提示', content).then(r => {
      if (r) {
        this.articleService.recommend(isRecommend, 0, this.selectItems).then(() => {
          this.search();
        });
      }
    });
  }

  /**
   * 批量审核评论
   * @param status
   */
  verifyMutil(status: boolean) {
    const content = status ? '您确定要审核通过该文章吗?' : '您确定要审核不通过该文章吗?';
    this.modalUtil.confirm('提示', content).then(r => {
      if (r) {
        this.articleService.verify(status, this.selectItems).then(() => {
          this.search();
        });
      }
    });
  }

  /**
   * 显示文章置顶框
   */
  showTop(articleId) {
    const top = {level: 0, expired: ''};    //  置顶信息
    this.list.forEach(item => {
      if (item.id === articleId) {
        top.level = item.topLevel;
        top.expired = DateUtil.formatDate(item.topExpired);
      }
    });
    this.dialogTop = this.dialogService.open(ArticleTopComponent);
    this.dialogTop.componentRef.instance.top = top;
    this.dialogTop.onClose.subscribe(result => {
      if (result) {
        this.articleService.top(articleId, result.level, result.expired).then(() => {
          this.search();
        });
      }
    });
  }
}
