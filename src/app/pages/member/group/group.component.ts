import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {MemberGroupService} from '../service/member-group-service';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {MemberGroupAddComponent} from './group-add/group-add.component';
import {MemberGroupDetailComponent} from './group-detail/group-detail.component';

@Component({
  selector: 'ngx-member-group',
  templateUrl: './group.component.html',
})
export class MemberGroupComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(private memberService: MemberGroupService, protected injector: Injector,
              private dialogService: NbDialogService) {
    super(memberService, injector);
  }

  private dialog: NbDialogRef<any>;

  ngOnInit() {
    this.getPager(1);
  }

  ngOnDestroy(): void {
    if (this.dialog) {
      this.dialog.close();
    }
  }

  /**
   * 显示添加会员组弹框
   */
  showAddGroup() {
    this.dialog = this.dialogService.open(MemberGroupAddComponent);
    this.dialog.onClose.subscribe(result => {
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
      this.dialog = this.dialogService.open(MemberGroupDetailComponent);
      this.dialog.componentRef.instance.group = data;
      this.dialog.onClose.subscribe(result => {
        if (result) {
          this.memberService.editData(result).then(() => {
            this.getPager(1);
          });
        }
      });
    });
  }
}
