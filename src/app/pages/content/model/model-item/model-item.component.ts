import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../base-component';
import {ModelItemService} from '../../service/model-item-service';
import {NbDialogService} from '@nebular/theme';
import {ModelItemAddComponent} from '../model-item-add/model-item-add.component';
import {ModelItemDetailComponent} from '../model-item-detail/model-item-detail.component';
import {ActivatedRoute} from '@angular/router';
import {forkJoin} from 'rxjs';
import {ModelService} from '../../service/model-service';

@Component({
  selector: 'ngx-content-model-item',
  templateUrl: './model-item.component.html',
  styleUrls: ['./model-item.component.scss'],
})
export class ModelItemComponent extends BaseComponent implements OnInit {

  constructor(private modelItemService: ModelItemService, private modelService: ModelService,
              protected injector: Injector,
              private dialogService: NbDialogService, private rout: ActivatedRoute) {
    super(modelItemService, injector);
  }

  defaultModelItem: Array<any>; //  系统默认模型
  model: any;  //  模型
  modelId: string; //  模型ID

  ngOnInit() {
    this.rout.paramMap.subscribe(params => {
      this.modelId = params.get('modelId');
      this.getModel();
      this.initData();
    });
  }

  /**
   * 初始化数据
   */
  initData() {
    const arr = [this.loadModelItems(this.modelId), this.loadDefaultModelItem()];
    const observable = forkJoin(arr);
    observable.subscribe(() => {
      this.list.forEach(item => {
        this.defaultModelItem = this.defaultModelItem.filter(defaultItem => {
          return item.field !== defaultItem.field;
        });
      });
    });
  }

  /**
   * 获得模型对象
   */
  getModel() {
    this.modelService.getData(this.modelId).then(result => {
      this.model = result;
    });
  }

  /**
   * 模型项集合
   * @param modelId
   */
  loadModelItems(modelId): Promise<any> {
    return this.modelItemService.getModelItems(modelId).then(result => {
      this.list = result;
      return Promise.resolve(result);
    });
  }

  /**
   * 系统默认模型项
   */
  loadDefaultModelItem(): Promise<any> {
    return this.modelItemService.defaultModelItems().then(result => {
      this.defaultModelItem = result;
      return Promise.resolve(result);
    });
  }

  /**
   * 显示添加模型项框
   */
  showAddModelItem() {
    const ref = this.dialogService.open(ModelItemAddComponent);
    this.modelItemService.getDataTypes().then(result => {
      ref.componentRef.instance.dataTypes = result;
    });
    ref.onClose.subscribe(result => {
      if (result) {
        result.modelId = this.modelId;
        this.modelItemService.saveData(result).then(() => {
          this.loadModelItems(this.modelId);
        });
      }
    });
  }

  /**
   * 显示编辑模型项框
   * @param id
   */
  showEditModelItem(id: string) {
    const ref = this.dialogService.open(ModelItemDetailComponent);
    this.modelItemService.getData(id).then(result => {
      ref.componentRef.instance.modelItem = result;
    });
    ref.onClose.subscribe(result => {
      if (result) {
        this.modelItemService.editData(result).then(() => {
          this.loadModelItems(this.modelId);
        });
      }
    });
  }

  /**
   * 排序 isUp 为true标识上移 false下移
   * @param id
   * @param isUp
   */
  sort(id: string, isUp: boolean) {
    this.list.forEach((item, index, array) => {
      if (item.id === id) {
        let upItemId = null;
        let downItemId = null;
        if (isUp === true) {
          const preItem = array[index - 1];
          if (preItem) {
            upItemId = id;
            downItemId = preItem.id;
          }
        } else {
          const nextItem = array[index + 1];
          if (nextItem) {
            upItemId = nextItem.id;
            downItemId = id;
          }
        }
        if (upItemId && downItemId) {
          this.modelItemService.sortModelItem(upItemId, downItemId).then(() => {
            this.initData();
          });
        }
      }
    });
  }

  /**
   * 删除模型项
   * @param id
   */
  delModelItem(id: string) {
    super.del(id).then(() => {
      this.initData();
    });
  }

  /**
   * 批量删除
   */
  delMutilModelItem() {
    super.delMutil().then(() => {
      this.initData();
    });
  }

  /**
   * 绑定系统模型
   * @param defaultModelItemId
   */
  bindModel(defaultModelItemId: string) {
    this.modelItemService.bindDefaultModelItem(this.modelId, [defaultModelItemId]).then(() => {
      this.initData();
    });
  }
}
