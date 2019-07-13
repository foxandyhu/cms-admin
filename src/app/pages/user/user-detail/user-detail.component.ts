import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {UserService} from '../service/users.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleService} from '../service/roles.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'ngx-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent extends BaseComponent implements OnInit {

  constructor(private userService: UserService, protected injector: Injector,
              private domSanitizer: DomSanitizer, private router: Router, private roleService: RoleService,
              private route: ActivatedRoute) {
    super(userService, injector);
  }

  user = {userName: '', password: '', confirmPassword: '', email: '', roles: [], face: '', status: ''}; //  用户对象
  roles: Array<any> = new Array<any>();               // 系统所有角色集合
  currentRoles: Array<any> = new Array<any>();       //  当前用户拥有的角色集合
  previewFace: any = '/assets/images/add_img.png';   //  头像预览
  private formId: string = 'userForm';              //  表单ID
  statuss = [{id: 1, name: '启用'}, {id: 2, name: '禁用'}];

  ngOnInit() {
    this.initValiator();
    this.route.paramMap.subscribe(params => {
      const userId = params.get('userId');
      const arr = [this.getRoles(), this.getUser(userId)];
      const observable = forkJoin(arr);
      observable.subscribe(() => {        //  合并请求然后选中已选中的角色
        this.roles.forEach((role, index, array) => {
          this.currentRoles.every((item, i, items) => {
            if (role.id === item.id) {
              role.selected = true;
              return false;
            }
            role.selected = false;
            return true;
          });
        });
      });
    });
  }

  /**
   * 初始化表单验证
   */
  initValiator() {
    this.initValidateForm(this.formId, {
      email: {
        validators: {
          notEmpty: {message: '邮箱地址不能为空!'},
          emailAddress: {message: '邮箱地址格式有误!'},
        },
      },
    });
  }

  /**
   * 获得用户信息
   * @param id
   */
  getUser(userId: any) {
    return this.userService.getData(userId).then(result => {
      this.user = result;
      this.currentRoles = this.user.roles;
      if (this.user.face) {
        this.previewFace = this.user.face;
      }
      return Promise.resolve(this.user);
    });
  }

  /**
   * 获得角色集合
   */
  getRoles() {
    return this.roleService.getRoles().then(result => {
      this.roles = result;
      return Promise.resolve(this.roles);
    });
  }

  /**
   * 角色选择
   */
  changeRole(id: number, selected: boolean) {
    this.currentRoles.splice(0, this.currentRoles.length);
    this.roles.forEach((role, index, array) => {
      if (role.id === id) {
        role.selected = selected;
      }
      if (role.selected === true) {    //  选中的角色重新放到当前用户拥有的角色集合中
        this.currentRoles.push({id: role.id, name: role.name});
      }
    });
  }

  /**
   * 账户状态选择
   * @param status
   */
  changeStatus(status: string) {
    this.user.status = status;
  }

  /**
   * 保存用户信息
   */
  editUser() {
    this.user.password = '***********';
    if (this.isValidForm(this.formId)) {
      this.user.roles = this.currentRoles;
      this.userService.editData(this.user).then(result => {
        if (result === true) {
          this.toastUtil.showSuccess('编辑成功!');
          this.router.navigate(['/user/list']);
        }
      });
    }
  }

  /**
   * 头像上传
   * @param event
   */
  faceFileChange(event) {
    const file = event.currentTarget.files[0];
    this.previewFace = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
    this.userService.uploadFace(file).then(result => {
      this.user.face = result;
    });
  }
}
