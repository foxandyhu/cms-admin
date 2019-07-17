import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../../base-component';

@Component({
  selector: 'ngx-email-provider-add',
  templateUrl: './email-add.component.html',
  styleUrls: ['./email-add.component.scss'],
})
export class EmailProviderAddComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector, private ref: NbDialogRef<EmailProviderAddComponent>) {
    super(null, injector);
  }

  emailProvider: any = {// 短信服务商
    name: '', host: '', encoding: '',
    userName: '', password: '', personal: '', enable: false, remark: '',
  };
  private formId: string = 'emailProviderForm';     //   表单ID

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
      host: {
        validators: {
          notEmpty: {message: '邮件服务器地址不能为空!'},
        },
      },
      encoding: {
        validators: {
          notEmpty: {message: '编码不能为空!'},
        },
      },
      userName: {
        validators: {
          notEmpty: {message: '用户名不能为空!'},
        },
      },
      password: {
        validators: {
          notEmpty: {message: '密码不能为空!'},
        },
      },
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.ref.close(this.emailProvider);
    }
  }

}
