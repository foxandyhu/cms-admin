import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from '../base-component';
import {FriendLinkTypeService} from './service/friendlink-type-service';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {FriendLinkTypeAddComponent} from './friendlink-type-add/friendlink-type-add.component';
import {FriendLinkTypeDetailComponent} from './friendlink-type-detail/friendlink-type-detail.component';

@Component({
  selector: 'ngx-friendlink-type',
  templateUrl: './friendlink-type.component.html',
})
export class FriendLinkTypeComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(private typeService: FriendLinkTypeService,
              protected injector: Injector, private dialogService: NbDialogService) {
    super(typeService, injector);
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
   * 显示添加友情链接类型弹框
   */
  showAddFriendLinkType() {
    this.dialog = this.dialogService.open(FriendLinkTypeAddComponent);
    this.dialog.onClose.subscribe(result => {
      if (result) {
        this.typeService.saveData(result).then(() => {
          this.getPager(1);
        });
      }
    });
  }

  /**
   * 显示编辑友情链接类型弹框
   */
  showEditFriendLinkType(id: string) {
    this.typeService.getData(id).then(data => {
      this.dialog = this.dialogService.open(FriendLinkTypeDetailComponent);
      this.dialog.componentRef.instance.friendLinkType = data;
      this.dialog.onClose.subscribe(result => {
        if (result) {
          this.typeService.editData(result).then(() => {
            this.getPager(1);
          });
        }
      });
    });
  }
}
