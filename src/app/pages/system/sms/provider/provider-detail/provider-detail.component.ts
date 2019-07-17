import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../../../base-component';

@Component({
  selector: 'ngx-sms-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.scss'],
})
export class SmsProviderDetailComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector, private ref: NbDialogRef<SmsProviderDetailComponent>) {
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
