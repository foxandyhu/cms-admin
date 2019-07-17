import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../base-component';
import {FriendLinkTypeService} from './service/friendlink-type-service';
import {NbDialogService} from '@nebular/theme';
import {FriendLinkTypeAddComponent} from './friendlink-type-add/friendlink-type-add.component';
import {FriendLinkTypeDetailComponent} from './friendlink-type-detail/friendlink-type-detail.component';

@Component({
  selector: 'ngx-friendlink-type',
  templateUrl: './friendlink-type.component.html',
})
export class FriendLinkTypeComponent extends BaseComponent implements OnInit {

  constructor(private typeService: FriendLinkTypeService,
              protected injector: Injector, private dialogService: NbDialogService) {
    super(typeService, injector);
  }

  ngOnInit() {
    this.getPager(1);
  }

  /**
   * 显示添加友情链接类型弹框
   */
  showAddFriendLinkType() {
    const ref = this.dialogService.open(FriendLinkTypeAddComponent);
    ref.onClose.subscribe(result => {
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
      const ref = this.dialogService.open(FriendLinkTypeDetailComponent);
      ref.componentRef.instance.friendLinkType = data;
      ref.onClose.subscribe(result => {
        if (result) {
          this.typeService.editData(result).then(() => {
            this.getPager(1);
          });
        }
      });
    });
  }
}
