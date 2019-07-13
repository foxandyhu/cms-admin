import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {RoleService} from '../service/roles.service';
import {NbDialogService} from '@nebular/theme';
import {RoleMenuComponent} from '../role-menu/role-menu.component';

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
}
