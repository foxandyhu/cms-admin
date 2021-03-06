import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../base-component';
import {DomSanitizer} from '@angular/platform-browser';
import {CommonService} from '../../common-service';
import {Constant} from '../../../core/constant';

@Component({
  selector: 'ngx-friendlink-detail',
  templateUrl: './friendlink-detail.component.html',
  styleUrls: ['./friendlink-detail.component.scss'],
})
export class FriendLinkDetailComponent extends BaseComponent implements OnInit {

  friendlink: any = {name: '', url: '', logo: '', remark: '',  enabled: false, type: {id: ''}};  //  友情链接
  private formId: string = 'friendLinkForm';     //   表单ID
  types: any;    //   类型列表
  preview: any;   //  图像预览

  constructor(protected injector: Injector, private ref: NbDialogRef<FriendLinkDetailComponent>,
              private domSanitizer: DomSanitizer,
              private commonService: CommonService) {
    super(null, injector);
  }

  ngOnInit() {
    this.preview = Constant.DEFAULT_PIC;
    this.initValiator();
    if (this.friendlink.logo) {
      this.preview = this.friendlink.logo;
    }
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
      url: {
        validators: {
          notEmpty: {message: '链接地址不能为空!'},
        },
      },
      type: {
        validators: {
          notEmpty: {message: '类型不能为空!'},
        },
      },
    });
  }

  /**
   * 头像上传
   * @param event
   */
  fileChange(event) {
    const file = event.currentTarget.files[0];
    if (file) {
      this.preview = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      this.commonService.uploadFile(file).then(result => {
        this.friendlink.logo = result;
      });
    }
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.ref.close(this.friendlink);
    }
  }
}
