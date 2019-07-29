import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {RoleService} from '../service/roles.service';
import {NbDialogService} from '@nebular/theme';
import {RoleMenuComponent} from '../role-menu/role-menu.component';
import {RoleAddComponent} from '../role-add/role-add.component';
import {RoleDetailComponent} from '../role-detail/role-detail.component';

@Component({
  selector: 'ngx-role',
  templateUrl: './role.component.html',
})
export class RoleComponent extends BaseComponent implements OnInit {

  constructor(private roleService: RoleService, protected injector: Injector, private dialogService: NbDialogService) {
    super(roleService, injector);
  }

  ngOnInit() {
    this.getPager(1);
  }

  /**
   * 弹出菜单权限选择框
   * @param roleId
   */
  showRoleMenuDialog(roleId: string, roleName: string) {
    const ref = this.dialogService.open(RoleMenuComponent);
    ref.componentRef.instance.roleName = roleName;
    this.roleService.getRoleMenu(roleId).then(result => {
      ref.componentRef.instance.setData(result);
    });
    ref.onClose.subscribe(result => {
      if (result === undefined) {
        return;
      }
      const userRole = {id: roleId, menus: result};
      this.roleService.grantRoleMenu(userRole).then(() => {
        this.getPager(1);
        this.toastUtil.showSuccess('保存成功!');
      });
    });
  }

  /**
   * 弹出添加角色模态框
   */
  showAddRole() {
    const ref = this.dialogService.open(RoleAddComponent);
    ref.onClose.subscribe(name => {
      if (name) {
        this.roleService.saveData({name: name}).then(result => {
          if (result === true) {
            this.toastUtil.showSuccess('新增成功!');
            this.getPager(1);
          }
        });
      }
    });
  }

  /**
   * 弹出编辑角色模态框
   */
  showEditRole(item: any) {
    const ref = this.dialogService.open(RoleDetailComponent);
    ref.componentRef.instance.name = item.name;
    ref.onClose.subscribe(name => {
      if (name) {
        item.name = name;
        this.roleService.editData(item).then(result => {
          if (result === true) {
            this.toastUtil.showSuccess('编辑成功!');
            this.getPager(1);
          }
        });
      }
    });
  }
}
