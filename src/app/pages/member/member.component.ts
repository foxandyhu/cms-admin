import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../base-component';
import {MemberService} from './service/member-service';
import {NbDialogService} from '@nebular/theme';
import {MemberEditPasswordComponent} from './edit-password/edit-password.component';

@Component({
  selector: 'ngx-member',
  templateUrl: './member.component.html',
})
export class MemberComponent extends BaseComponent implements OnInit {

  constructor(private memberService: MemberService, protected injector: Injector,
              private dialogService: NbDialogService) {
    super(memberService, injector);
  }

  /**
   * 所有状态
   */
  statuss: any = [{id: 0, name: '待审核'}, {id: 1, name: '正常'}, {id: 2, name: '已禁用'}];
  params: any = {status: '', userName: '', email: ''};    //  搜索条件

  ngOnInit() {
    this.getPager(1);
  }

  /**
   * 搜索
   */
  search() {
    for (const key in this.params) {
      if (this.params.hasOwnProperty(key)) {
        this.setQueryParams(key, this.params[key]);
      }
    }
    this.getPager(1);
  }

  /**
   * 修改状态
   */
  editStatus(memberId: string, status: string) {
    this.modalUtil.confirm('提示', '您确认要修改该账户状态吗?').then(result => {
      if (result) {
        this.memberService.editStatus(memberId, status).then(() => {
          this.toastUtil.showSuccess('状态修改成功!');
          this.search();
        });
      }
    });
  }

  /**
   * 修改密码
   * @param memberId
   */
  showEditPassword(memberId: string) {
    const ref = this.dialogService.open(MemberEditPasswordComponent);
    ref.onClose.subscribe(result => {
      if (result) {
        result.memberId = memberId;
        this.memberService.editPassword(result).then(() => {
          this.toastUtil.showSuccess('密码修改成功!');
        });
      }
    });
  }
}

