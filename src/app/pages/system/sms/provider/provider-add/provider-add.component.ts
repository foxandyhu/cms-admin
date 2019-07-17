import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../base-component';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'ngx-sms-provider-add',
  templateUrl: './provider-add.component.html',
  styleUrls: ['./provider-add.component.scss'],
})
export class SmsProviderAddComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector, private ref: NbDialogRef<SmsProviderAddComponent>) {
    super(null, injector);
  }

  smsProvider: any = {name: '', userName: '', password: '', url: '', enable: false, remark: ''};   // 短信服务商
  private formId: string = 'smsProviderForm';     //   表单ID

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
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.ref.close(this.smsProvider);
    }
  }
}
