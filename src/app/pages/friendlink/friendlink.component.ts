import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from '../base-component';
import {FriendLinkService} from './service/friendlink-service';
import {FriendLinkTypeService} from './service/friendlink-type-service';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {FriendLinkAddComponent} from './friendlink-add/friendlink-add.component';
import {FriendLinkDetailComponent} from './friendlink-detail/friendlink-detail.component';

@Component({
  selector: 'ngx-friendlink',
  templateUrl: './friendlink.component.html',
})
export class FriendlinkComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(private linkService: FriendLinkService, private typeService: FriendLinkTypeService,
              protected injector: Injector, private dialogService: NbDialogService) {
    super(linkService, injector);
  }

  type: string = '';  //  类型
  types: any;    //   类型列表
  private dialog: NbDialogRef<any>;

  ngOnInit() {
    this.changeType();
    this.getAllType();
  }

  ngOnDestroy(): void {
    if (this.dialog) {
      this.dialog.close();
    }
  }

  /**
   * 类型选择
   */
  changeType() {
    this.setQueryParams('type', this.type);
    this.getPager(1);
  }

  /**
   * 类型列表
   */
  getAllType() {
    this.typeService.getAllType().then(result => {
      this.types = result;
    });
  }

  /**
   * 显示添加友情链接弹框
   */
  showAddFriendLink() {
    this.dialog = this.dialogService.open(FriendLinkAddComponent);
    this.dialog.componentRef.instance.types = this.types;
    this.dialog.onClose.subscribe(result => {
      if (result) {
        this.linkService.saveData(result).then(() => {
          this.type = '';
          this.changeType();
        });
      }
    });
  }

  /**
   * 显示编辑友情链接弹框
   */
  showEditFriendLink(id: string) {
    this.linkService.getData(id).then(data => {
      this.dialog = this.dialogService.open(FriendLinkDetailComponent);
      this.dialog.componentRef.instance.friendlink = data;
      this.dialog.componentRef.instance.types = this.types;
      this.dialog.onClose.subscribe(result => {
        if (result) {
          this.linkService.editData(result).then(() => {
            this.getPager(1);
          });
        }
      });
    });
  }
}
