import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../../base-component';

@Component({
  selector: 'ngx-content-model-detail',
  templateUrl: './model-detail.component.html',
  styleUrls: ['./model-detail.component.scss'],
})
export class ModelDetailComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector, private ref: NbDialogRef<ModelDetailComponent>) {
    super(null, injector);
  }

  model: any = {name: '', tplDir: '', enabled: true, hasContent: true, remark: ''}; //  模型
  formId: string = 'modelForm';

  ngOnInit() {
    this.initValiator();
  }

  /**
   * 初始化表单验证
   */
  initValiator() {
    this.initValidateForm(this.formId, {
      name: {
        validators: {
          notEmpty: {message: '名称不能为空!'},
        },
      },
      tplDir: {
        validators: {
          notEmpty: {message: '模版文件夹名称不能为空!'},
        },
      },
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.ref.close(this.model);
    }
  }
}
