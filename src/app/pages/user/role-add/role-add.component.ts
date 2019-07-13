import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {RoleService} from '../service/roles.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss'],
})
export class RoleAddComponent extends BaseComponent implements OnInit {

  constructor(private roleService: RoleService, protected injector: Injector, private router: Router) {
    super(roleService, injector);
  }

  role = {name: ''};  //  角色对象
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

  /**
   * 保存系统角色
   */
  saveRole() {
    if (this.isValidForm(this.formId)) {
      this.roleService.saveData(this.role).then(result => {
        if (result === true) {
          this.toastUtil.showSuccess('新增成功!');
          this.router.navigate(['/user/role']);
        }
      });
    }
  }
}
