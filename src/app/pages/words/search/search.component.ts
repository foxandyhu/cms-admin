import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {SearchWordService} from '../service/searchword-service';

@Component({
  selector: 'ngx-words-search',
  templateUrl: './search.component.html',
})
export class SearchComponent extends BaseComponent implements OnInit {

  constructor(private searchWordService: SearchWordService, protected injector: Injector) {
    super(searchWordService, injector);
  }

  searchWord: string;  //  搜索词
  recommend: string;   //   是否推荐

  ngOnInit() {
    this.getPager(1);
  }

  /**
   * 搜索
   */
  search() {
    this.setQueryParams('recommend', this.recommend);
    this.setQueryParams('search', this.searchWord);
    this.getPager(1);
  }

  /**
   * 类型搜索
   * @param type
   */
  changeType(type: string) {
    this.recommend = type;
    this.search();
  }

  /**
   * 改变推荐状态
   */
  changeRecommend(id: string, status: string) {
    this.searchWordService.changeRecommend(id, status).then(() => {
      this.toastUtil.showSuccess('推荐成功!');
      this.search();
    });
  }
}
