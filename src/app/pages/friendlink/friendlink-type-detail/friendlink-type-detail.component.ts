import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../base-component';

@Component({
  selector: 'ngx-friendlink-type-detail',
  templateUrl: './friendlink-type-detail.component.html',
  styleUrls: ['./friendlink-type-detail.component.scss'],
})
export class FriendLinkTypeDetailComponent extends BaseComponent implements OnInit {

  friendLinkType: any = {name: ''};  //  友情链接类型
  private formId: string = 'friendLinkTypeForm';     //   表单ID

  constructor(protected injector: Injector, private ref: NbDialogRef<FriendLinkTypeDetailComponent>) {
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
