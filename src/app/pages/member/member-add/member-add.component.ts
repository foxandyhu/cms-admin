import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {MemberService} from '../service/member-service';
import {DomSanitizer} from '@angular/platform-browser';
import {CommonService} from '../../common-service';
import {Router} from '@angular/router';
import {MemberGroupService} from '../service/member-group-service';
import * as moment from 'moment';

@Component({
  selector: 'ngx-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.scss'],
})
export class MemberAddComponent extends BaseComponent implements OnInit {

  constructor(private memberService: MemberService, protected injector: Injector,
              private router: Router, private domSanitizer: DomSanitizer, private commonService: CommonService,
              private groupService: MemberGroupService) {
    super(memberService, injector);
  }

  private formId: string = 'memberForm';              //  表单ID
  member: any = {   //  会员信息
    userName: '', email: '', password: '', status: '', group: {id: ''},
    memberExt: {
      realName: '', girl: 'false', birthday: '', intro: '', comeFrom: '',
      qq: '', weixin: '', phone: '', mobile: '', face: '', signature: '',
    },
  };
  statuss: any = [{id: 0, name: '待审核'}, {id: 1, name: '正常'}, {id: 2, name: '已禁用'}];
  groups: any;   //  会员组
  preview: any = '/assets/images/add_img.png';   //  头像预览

  ngOnInit() {
    this.initValiator();

    this.groupService.getAllGroup().then(result => {
      this.groups = result;
    });
  }

  /**
   * 初始化表单验证
   */
  initValiator() {
    this.initValidateForm(this.formId, {
      userName: {
        validators: {
          notEmpty: {message: '用户名不能为空!'},
        },
      },
      email: {
        validators: {
          emailAddress: {message: '邮件格式错误!'},
        },
      },
      password: {
        validators: {
          notEmpty: {message: '密码不能为空!'},
        },
      },
      confirmPassword: {
        validators: {
          notEmpty: {message: '请输入确认密码!'},
          stringLength: {min: 6, max: 50, message: '密码在6-50个字符之间!'},
          identical: {field: 'password', message: '两次输入的密码不一致!'},
        },
      },
      groupId: {
        validators: {
          notEmpty: {message: '会员组不能为空!'},
        },
      },
      status: {
        validators: {
          notEmpty: {message: '状态不能为空!'},
        },
      },
    });
  }

  /**
   * 保存会员
   */
  saveMember() {
    if (this.isValidForm(this.formId)) {
      this.memberService.saveData(this.member).then(() => {
        this.toastUtil.showSuccess('新增成功!');
        this.router.navigate(['/member/list']);
      });
    }
  }

  /**
   * 头像上传
   * @param event
   */
  faceFileChange(event) {
    const file = event.currentTarget.files[0];
    if (file) {
      this.preview = this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      this.commonService.uploadFile(file).then(result => {
        this.member.memberExt.face = result;
      });
    }
  }

  /**
   * 日期选择
   * @param date
   */
  dateChange(date) {
    this.member.memberExt.birthday = moment(date).format('YYYY-MM-DD');
  }
}
