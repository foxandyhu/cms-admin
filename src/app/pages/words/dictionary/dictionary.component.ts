import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {DictionaryService} from '../service/dictionary-service';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {DictionaryAddComponent} from './dictionary-add/dictionary-add.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';

@Component({
  selector: 'ngx-words-dictionary',
  templateUrl: './dictionary.component.html',
})
export class DictionaryComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(private dictionaryService: DictionaryService,
              protected injector: Injector, private dialogService: NbDialogService) {
    super(dictionaryService, injector);
  }

  private dialog: NbDialogRef<any>;
  types: Array<string>;  //  类型集合

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    if (this.dialog) {
      this.dialog.close();
    }
  }

  /**
   * 初始化加载数据
   */
  private loadData() {
    this.changeType(null);
    this.getDictionaryTypes();
  }

  /**
   * 获得所有数据字典类型
   */
  getDictionaryTypes() {
    this.dictionaryService.getDictionaryTypes().then(result => {
      this.types = result;
    });
  }

  /**
   * 类型查找
   */
  changeType(type: string) {
    this.setQueryParams('type', type);
    this.getPager(1);
  }

  /**
   * 显示添加数据字典弹框
   */
  showAddDictionary() {
    this.dialog = this.dialogService.open(DictionaryAddComponent);
    this.dialog.onClose.subscribe(result => {
      if (result) {
        this.dictionaryService.saveData(result).then(() => {
          this.loadData();
        });
      }
    });
  }

  /**
   * 显示编辑数据字典弹框
   */
  showEditDictionary(id: string) {
    this.dictionaryService.getData(id).then(data => {
      this.dialog = this.dialogService.open(DictionaryDetailComponent);
      this.dialog.componentRef.instance.dictionary = data;
      this.dialog.onClose.subscribe(result => {
        if (result) {
          this.dictionaryService.editData(result).then(() => {
            this.loadData();
          });
        }
      });
    });
  }

  /**
   * 删除数据
   * @param id 数据ID或数组
   */
  del(id): Promise<boolean> {
    return super.del(id).then(result => {
      if (result === true) {
        this.getDictionaryTypes();
      }
      return Promise.resolve(result);
    });
  }

  /**
   * 批量删除数据
   */
  delMutil(): Promise<boolean> {
    return super.delMutil().then(result => {
      if (result === true) {
        this.getDictionaryTypes();
      }
      return Promise.resolve(result);
    });
  }
}
