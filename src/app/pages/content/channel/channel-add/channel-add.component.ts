import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../../base-component';
import {ModelService} from '../../service/model-service';
import '@ztree/ztree_v3';

declare var jQuery: any;

@Component({
  selector: 'ngx-content-channel-add',
  templateUrl: './channel-add.component.html',
  styleUrls: ['./channel-add.component.scss'],
})
export class ChannelAddComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector, private modelService: ModelService,
              private ref: NbDialogRef<ChannelAddComponent>) {
    super(null, injector);
    ChannelAddComponent.component = this;
  }

  formId: string = 'channelForm';
  channel: any = {
    name: '', path: '', display: true, link: '', tplPcChannel: '',
    tplPcContent: '', tplMobileChannel: '', tplMobileContent: '', target: '', keywords: '',
    summary: '', modelId: '', parentId: '',
  };  //  栏目
  opens: any = ['_blank', '_self', '_parent', '_top'];
  private _channels: Array<any>;  // 栏目
  selectChannel: any = {id: 0, name: '根栏目'};    //  选择的栏目
  models: Array<any>;    //  模型
  private _isOutLink: boolean = false;  //  是否外部连接
  isHasContent: boolean = false; //  选中的模型是否有内容
  pcTemplates: any;    //  pc模版
  mobileTemplates: any;  //  手机模版
  private static component: ChannelAddComponent;
  private setting = {
    check: {enable: false},
    data: {keep: {parent: true}, simpleData: {idKey: 'id', pIdKey: 'parentId', rootPId: 0, enable: true}},
    callback: {
      onClick: function (event, treeId, treeNode) {
        ChannelAddComponent.component.channel.parentId = treeNode.id;
        ChannelAddComponent.component.selectChannel.name = treeNode.name;
        ChannelAddComponent.component.selectChannel.id = treeNode.id;
        jQuery('#channelCc').fadeOut('fast');
      },
    },
  };

  ngOnInit() {
    this.initValiator();
  }

  get channels(): Array<any> {
    return this._channels;
  }

  set channels(value: Array<any>) {
    this._channels = new Array<any>();
    this._channels.push({name: '根节点', id: 0, open: true});
    this._channels = this._channels.concat(value);
    jQuery.fn.zTree.init(jQuery('#channelTree'), this.setting, this._channels);
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

  showChannels() {
    const cityObj = jQuery('#channelSelBtn');
    const cityOffset = cityObj.offset();
    jQuery('#channelCc').css({
      left: cityOffset.left + 'px',
      top: cityOffset.top + cityObj.outerHeight() + 'px',
    }).slideDown('fast');
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
