import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../base-component';
import {MemberConfigService} from '../../service/member-config-service';

@Component({
  selector: 'ngx-member-login-config',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginConfigComponent extends BaseComponent implements OnInit {

  constructor(private configService: MemberConfigService, protected injector: Injector) {
    super(configService, injector);
  }

  loginConfig: any = {
    openLogin: '', loginError: 0, loginErrorTimeOut: 0,
    emailProvider: {id: ''}, retrievePwdTitle: '', retrievePwdText: '',
  };                    //  登录配置
  emails: any;         //    邮件服务商
  formId: string = 'loginConfigForm';

  ngOnInit() {
    this.initValiator();
    this.configService.getAllEmailProvider().then(result => {
      this.emails = result;
    });
    this.configService.getConfig().then(result => {
      if (result && result.loginConfig) {
        this.loginConfig = result.loginConfig;
        this.loginConfig.openLogin = this.loginConfig.openLogin + '';
      }
    });
  }

  /**
   * 初始化表单验证
   */
  initValiator() {
    this.initValidateForm(this.formId, {
      openLogin: {
        validators: {
          notEmpty: {message: '请选择是否开启登录功能!'},
        },
      },
      loginError: {
        validators: {
          notEmpty: {message: '登录错误次数最小为0!'},
          between: {min: 0, max: 10, message: '登录错误次数最小为0-10！'},
        },
      },
      loginErrorTimeOut: {
        validators: {
          notEmpty: {message: '登录错误时间最小为0!'},
          between: {min: 0, max: 3600, message: '登录错误时间最小为0-3600!'},
        },
      },
      emailId: {
        validators: {
          notEmpty: {message: '请选中邮件服务器!'},
        },
      },
      retrievePwdTitle: {
        validators: {
          notEmpty: {message: '找回密码标题不能为空!'},
        },
      },
    });
  }

  /**
   * 保存登录配置
   */
  saveLoginConfig() {
    const data = {loginConfig: this.loginConfig};
    if (this.isValidForm(this.formId)) {
      this.configService.editLoginConfig(data).then(() => {
        this.toastUtil.showSuccess('保存成功!');
      });
    }
  }
}
