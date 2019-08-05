import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../base-component';
import {NbDialogRef} from '@nebular/theme';
import {ModelService} from '../../service/model-service';

@Component({
  selector: 'ngx-content-channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.scss'],
})
export class ChannelDetailComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector, private modelService: ModelService,
              private ref: NbDialogRef<ChannelDetailComponent>) {
    super(null, injector);
  }

  formId: string = 'channelForm';
  private _channel: any = {
    name: '', path: '', display: false, link: '', tplPcChannel: '',
    tplPcContent: '', tplMobileChannel: '', tplMobileContent: '', target: '', keywords: '',
    summary: '', modelId: '', parentId: '',
  };  //  栏目
  opens: any = ['_blank', '_self', '_parent', '_top'];
  private _channels: Array<any>;  // 栏目
  private _models: Array<any>;    //  模型
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
      this.ref.close(this._channel);
    }
  }

  /**
   * 模型选择事件
   */
  modelChange() {
    const modelId = this._channel.modelId;
    this._models.forEach(model => {
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

  get channel(): any {
    return this._channel;
  }

  set channel(value: any) {
    this._channel = value;
    if (this._channel) {
      if (this._channel.link) {
        this._isOutLink = true;
      }
      if (!this._channel.tplMobileChannel) {
        this._channel.tplMobileChannel = '';
      }
      if (!this._channel.tplMobileContent) {
        this._channel.tplMobileContent = '';
      }
      if (!this._channel.tplPcChannel) {
        this._channel.tplPcChannel = '';
      }
      if (!this._channel.tplPcContent) {
        this._channel.tplPcContent = '';
      }
      this.isHasContent = this._channel.hasContent;
    }
  }

  get channels(): Array<any> {
    return this._channels;
  }

  set channels(value: Array<any>) {
    this._channels = value;
  }

  get models(): Array<any> {
    return this._models;
  }

  set models(value: Array<any>) {
    this._models = value;
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
