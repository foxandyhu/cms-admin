import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../base-component';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'ngx-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss'],
})
export class MenuDetailComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector, private ref: NbDialogRef<MenuDetailComponent>) {
    super(null, injector);
  }

  ngOnInit() {
    this.initValiator();
  }

  menu: any = {id: '', name: '', url: ''};  //  菜单信息
  private formId: string = 'menuForm';     //   表单ID

  /**
   * 初始化表单验证
   */
  initValiator() {
    this.initValidateForm(this.formId, {
      name: {
        validators: {
          notEmpty: {message: '菜单名称不能为空!'},
        },
      },
      url: {
        validators: {
          notEmpty: {message: '菜单地址不能为空!'},
        },
      },
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.ref.close(this.menu);
    }
  }
}
