import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {ModelService} from '../service/model-service';
import {NbDialogService} from '@nebular/theme';
import {ModelAddComponent} from './model-add/model-add.component';
import {ModelDetailComponent} from './model-detail/model-detail.component';

@Component({
  selector: 'ngx-content-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent extends BaseComponent implements OnInit {

  constructor(private modelService: ModelService, protected injector: Injector,
              private dialogService: NbDialogService) {
    super(modelService, injector);
  }

  ngOnInit() {
    this.getPager(1);
  }

  /**
   * 更新状态
   * @param id
   * @param enabled
   */
  eiditEnabled(id: string, enabled: boolean) {
    const msg = '您确认要进行'.concat(enabled === true ? '启用' : '禁用', '该操作吗?');
    this.modalUtil.confirm('提示', msg).then(r => {
      if (r) {
        this.modelService.editEnabled(id, enabled + '').then(() => {
          this.toastUtil.showSuccess('操作成功!');
          this.getPager(1);
        });
      }
    });
  }

  /**
   * 显示添加模型框
   */
  showAddModel() {
    const ref = this.dialogService.open(ModelAddComponent);
    ref.onClose.subscribe(result => {
      if (result) {
        this.modelService.saveData(result).then(() => {
          this.getPager(1);
        });
      }
    });
  }

  /**
   * 显示编辑模型框
   * @param id
   */
  showEditModel(id: string) {
    const ref = this.dialogService.open(ModelDetailComponent);
    this.modelService.getData(id).then(result => {
      ref.componentRef.instance.model = result;
    });
    ref.onClose.subscribe(result => {
      if (result) {
        this.modelService.editData(result).then(() => {
          this.getPager(1);
        });
      }
    });
  }
}
