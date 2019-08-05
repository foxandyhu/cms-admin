import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../../base-component';
import {ModelService} from '../../service/model-service';

@Component({
  selector: 'ngx-content-channel-add',
  templateUrl: './channel-add.component.html',
  styleUrls: ['./channel-add.component.scss'],
})
export class ChannelAddComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector, private modelService: ModelService,
              private ref: NbDialogRef<ChannelAddComponent>) {
    super(null, injector);
  }

  formId: string = 'channelForm';
  channel: any = {
    name: '', path: '', display: true, link: '', tplPcChannel: '',
    tplPcContent: '', tplMobileChannel: '', tplMobileContent: '', target: '', keywords: '',
    summary: '', modelId: '', parentId: '',
  };  //  栏目
  opens: any = ['_blank', '_self', '_parent', '_top'];
  channels: Array<any>;  // 栏目
  models: Array<any>;    //  模型
  private _isOutLink: boolean = false;  //  是否外部连接
  isHasContent: boolean = false; //  选中的模型是否有内容
  pcTemplates: any;    //  pc模版
  mobileTemplates: any;  //  手机模版

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
      path: {
        validators: {
          notEmpty: {message: '访问路径不能为空!'},
        },
      },
      modelId: {
        validators: {
          notEmpty: {message: '请选择模型!'},
        },
      },
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.ref.close(this.channel);
    }
  }

  /**
   * 模型选择事件
   */
  modelChange() {
    const modelId = this.channel.modelId;
    this.models.forEach(model => {
      if (parseInt(model.id, 0) === parseInt(modelId, 0)) {
        this.isHasContent = model.hasContent;
        this.modelService.getModelTemplates(modelId).then(result => {
          if (result) {
            this.pcTemplates = result['pc'];
            this.mobileTemplates = result['mobile'];
          }
        });
      }
    });
  }

  get isOutLink(): boolean {
    return this._isOutLink;
  }

  set isOutLink(value: boolean) {
    this._isOutLink = value;
    if (!value) {
      this.channel.link = '';
    }
  }
}
