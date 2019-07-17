import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../base-component';

@Component({
  selector: 'ngx-friendlink-type-add',
  templateUrl: './friendlink-type-add.component.html',
  styleUrls: ['./friendlink-type-add.component.scss'],
})
export class FriendLinkTypeAddComponent extends BaseComponent implements OnInit {

  friendLinkType: any = {name: ''};  //  友情链接类型
  private formId: string = 'friendLinkTypeForm';     //   表单ID

  constructor(protected injector: Injector, private ref: NbDialogRef<FriendLinkTypeAddComponent>) {
    super(null, injector);
  }

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
      seq: {
        validators: {
          notEmpty: {message: '排序不能为空!'},
          digits: {min: 0, message: '排序值最小为0!'},
        },
      },
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.ref.close(this.friendLinkType);
    }
  }
}
