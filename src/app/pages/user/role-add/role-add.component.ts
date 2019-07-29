import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'ngx-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss'],
})
export class RoleAddComponent extends BaseComponent implements OnInit {

  constructor(protected injector: Injector, private ref: NbDialogRef<RoleAddComponent>) {
    super(null, injector);
  }

  name = '';  //  角色名称
  private formId: string = 'roleForm';              //  表单ID

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
          notEmpty: {message: '角色名称不能为空!'},
        },
      },
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    if (this.isValidForm(this.formId)) {
      this.ref.close(this.name);
    }
  }
}
