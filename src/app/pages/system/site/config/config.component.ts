import {Component, Injector, OnInit} from '@angular/core';
import {SiteConfigService} from '../../service/site-config-service';
import {BaseComponent} from '../../../base-component';

@Component({
  selector: 'ngx-site-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class SiteConfigComponent extends BaseComponent implements OnInit {

  constructor(private configService: SiteConfigService, protected injector: Injector) {
    super(configService, injector);
  }

  siteConfig: any = {
    openSite: '', name: '', shortName: '', webSite: '', keywords: '',
    remark: '', openFlow: '', tplPc: '', tplMobile: '', filingCode: '', copyRight: '',
    copyRightOwner: '', organizer: '',
  }; //  站点配置
  formId: string = 'siteConfigForm';
  tplPcs: any;
  tplMobiles: any;

  ngOnInit() {
    this.initValidator();
    this.configService.getSiteConfig().then(result => {
      if (result) {
        this.siteConfig = result;
        this.siteConfig.openFlow = this.siteConfig.openFlow + '';
        this.siteConfig.openSite = this.siteConfig.openSite + '';
        if (!this.siteConfig.tplPc) {
          this.siteConfig.tplPc = '';
        }
        if (!this.siteConfig.tplMobile) {
          this.siteConfig.tplMobile = '';
        }
        this.tplPcs = this.siteConfig['pc'];
        this.tplMobiles = this.siteConfig['mobile'];
        delete this.siteConfig['pc'];
        delete this.siteConfig['mobile'];
      }
    });
  }


  /**
   * 初始化表单验证
   */
  initValidator() {
    this.initValidateForm(this.formId, {
      name: {
        validators: {
          notEmpty: {message: '站点名称不能为空!'},
        },
      },
      webSite: {
        validators: {
          notEmpty: {message: '站点域名不能为空!'},
        },
      },
      openSite: {
        validators: {
          notEmpty: {message: '请选择是否开启站点!'},
        },
      },
      openFlow: {
        validators: {
          notEmpty: {message: '请选择是否开启流量统计!'},
        },
      },
    });
  }

  /**
   * 编辑站点配置
   */
  editSiteConfig() {
    if (this.isValidForm(this.formId)) {
      this.configService.editSiteConfig(this.siteConfig).then(() => {
        this.toastUtil.showSuccess('保存成功!');
      });
    }
  }
}
