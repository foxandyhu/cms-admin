import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {BaseComponent} from '../../../base-component';

@Component({
  selector: 'ngx-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss'],
})
export class MenuAddComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector, private ref: NbDialogRef<MenuAddComponent>) {
    super(null, injector);
  }

  ngOnInit() {
    this.initValiator();
  }

  private menu: any = {name: '', url: ''};  //  菜单信息
  private formId: string = 'menuForm';     //   表单ID
  parentMenuName: string;          //  父菜单名称

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
    this.parentMenuName = '';
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.parentMenuName = '';
      this.ref.close(this.menu);
    }
  }
}
