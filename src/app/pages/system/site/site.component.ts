import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {SiteConfigService} from '../service/site-config-service';

@Component({
  selector: 'ngx-system-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteConfigComponent extends BaseComponent implements OnInit {

  constructor(private configService: SiteConfigService, protected injector: Injector) {
    super(configService, injector);
  }

  siteConfig: any = {
    openSite: '', name: '', shortName: '', webSite: '', keywords: '',
    remark: '', openFlow: '', openComment: '', needLoginComment: '', openGuestBook: '',
    needLoginGuestBook: '', maxGutstBookLimit: '', maxCommentLimit: '',
  }; //  站点配置
  formId: string = 'siteConfigForm';

  ngOnInit() {
    this.initValiator();
    this.configService.getSiteConfig().then(result => {
      if (result) {
        this.siteConfig = result;
        this.siteConfig.openComment = this.siteConfig.openComment + '';
        this.siteConfig.openFlow = this.siteConfig.openFlow + '';
        this.siteConfig.openGuestBook = this.siteConfig.openGuestBook + '';
        this.siteConfig.openSite = this.siteConfig.openSite + '';
        this.siteConfig.needLoginComment = this.siteConfig.needLoginComment + '';
        this.siteConfig.needLoginGuestBook = this.siteConfig.needLoginGuestBook + '';
      }
    });
  }


  /**
   * 初始化表单验证
   */
  initValiator() {
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
      openComment: {
        validators: {
          notEmpty: {message: '请选择是否开启评论!'},
        },
      },
      needLoginComment: {
        validators: {
          notEmpty: {message: '请选择评论是否登录!'},
        },
      },
      openGuestBook: {
        validators: {
          notEmpty: {message: '请选择是否开启留言!'},
        },
      },
      needLoginGuestBook: {
        validators: {
          notEmpty: {message: '请选择留言是否登录!'},
        },
      },
      maxCommentLimit: {
        validators: {
          notEmpty: {message: '留言日最高限制数不能为空!'},
          digits: {message: '留言日最高限制数最小为0！'},
        },
      },
      maxGuestBookLimit: {
        validators: {
          notEmpty: {message: '评论日最高限制数不能为空!'},
          digits: {message: '评论日最高限制数最小为0！'},
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
