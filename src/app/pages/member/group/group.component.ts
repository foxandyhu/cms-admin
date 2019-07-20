import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {MemberGroupService} from '../service/member-group-service';
import {NbDialogService} from '@nebular/theme';
import {MemberGroupAddComponent} from './group-add/group-add.component';
import {MemberGroupDetailComponent} from './group-detail/group-detail.component';

@Component({
  selector: 'ngx-member-group',
  templateUrl: './group.component.html',
})
export class MemberGroupComponent extends BaseComponent implements OnInit {

  constructor(private memberService: MemberGroupService, protected injector: Injector,
              private dialogService: NbDialogService) {
    super(memberService, injector);
  }

  ngOnInit() {
    this.getPager(1);
  }

  /**
   * 显示添加会员组弹框
   */
  showAddGroup() {
    const ref = this.dialogService.open(MemberGroupAddComponent);
    ref.onClose.subscribe(result => {
      if (result) {
        this.memberService.saveData(result).then(() => {
          this.getPager(1);
        });
      }
    });
  }

  /**
   * 显示编辑会员组弹框
   */
  showEditGroup(id: string) {
    this.memberService.getData(id).then(data => {
      const ref = this.dialogService.open(MemberGroupDetailComponent);
      ref.componentRef.instance.group = data;
      ref.onClose.subscribe(result => {
        if (result) {
          this.memberService.editData(result).then(() => {
            this.getPager(1);
          });
        }
      });
    });
  }
}
