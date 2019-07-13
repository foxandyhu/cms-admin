import {Component, Injector, OnInit} from '@angular/core';
import {RoleService} from '../service/roles.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseComponent} from '../../base-component';

@Component({
  selector: 'ngx-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.scss'],
})
export class RoleDetailComponent extends BaseComponent implements OnInit {

  constructor(private roleService: RoleService, protected injector: Injector, private router: Router,
              private route: ActivatedRoute) {
    super(roleService, injector);
  }

  role = {name: ''};  //  角色对象
  private formId: string = 'roleForm';              //  表单ID

  ngOnInit() {
    this.initValiator();
    this.route.paramMap.subscribe(params => {
      const roleId = params.get('roleId');
      this.roleService.getData(roleId).then(result => {
        this.role = result;
      });
    });
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
   * 编辑系统角色
   */
  editRole() {
    if (this.isValidForm(this.formId)) {
      this.roleService.editData(this.role).then(result => {
        if (result === true) {
          this.toastUtil.showSuccess('编辑成功!');
          this.router.navigate(['/user/role']);
        }
      });
    }
  }
}
