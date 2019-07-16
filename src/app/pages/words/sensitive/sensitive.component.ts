import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {NbDialogService} from '@nebular/theme';
import {SensitiveDetailComponent} from './sensitive-detail/sensitive-detail.component';
import {SensitiveAddComponent} from './sensitive-add/sensitive-add.component';
import {SensitiveWordService} from '../service/sensitiveword-service';

@Component({
  selector: 'ngx-words-sensitive',
  templateUrl: './sensitive.component.html',
})
export class SensitiveComponent extends BaseComponent implements OnInit {

  constructor(private sensitiveService: SensitiveWordService,
              protected injector: Injector, private dialogService: NbDialogService) {
    super(sensitiveService, injector);
  }

  searchWord: string;  //  搜索词

  ngOnInit() {
    this.loadData();
  }

  /**
   * 加载数据
   */
  loadData() {
    this.setQueryParams('search', null);
    this.getPager(1);
  }

  /**
   * 显示添加敏感词弹框
   */
  showAddSensitive() {
    const ref = this.dialogService.open(SensitiveAddComponent);
    ref.onClose.subscribe(result => {
      if (result) {
        this.sensitiveService.saveData(result).then(() => {
          this.loadData();
        });
      }
    });
  }

  /**
   * 显示编辑敏感词弹框
   */
  showEditSensitive(id: string) {
    this.sensitiveService.getData(id).then(data => {
      const ref = this.dialogService.open(SensitiveDetailComponent);
      ref.componentRef.instance.sensitive = data;
      ref.onClose.subscribe(result => {
        if (result) {
          this.sensitiveService.editData(result).then(() => {
            this.loadData();
          });
        }
      });
    });
  }

  /**
   * 搜索
   */
  search() {
    this.setQueryParams('search', this.searchWord);
    this.getPager(1);
  }
}
