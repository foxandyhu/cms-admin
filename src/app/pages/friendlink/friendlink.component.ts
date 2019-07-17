import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../base-component';
import {FriendLinkService} from './service/friendlink-service';
import {FriendLinkTypeService} from './service/friendlink-type-service';
import {NbDialogService} from '@nebular/theme';
import {FriendLinkAddComponent} from './friendlink-add/friendlink-add.component';
import {FriendLinkDetailComponent} from './friendlink-detail/friendlink-detail.component';

@Component({
  selector: 'ngx-friendlink',
  templateUrl: './friendlink.component.html',
})
export class FriendlinkComponent extends BaseComponent implements OnInit {

  constructor(private linkService: FriendLinkService, private typeService: FriendLinkTypeService,
              protected injector: Injector, private dialogService: NbDialogService) {
    super(linkService, injector);
  }

  type: string = '';  //  类型
  types: any;    //   类型列表

  ngOnInit() {
    this.changeType();
    this.getAllType();
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
    const ref = this.dialogService.open(FriendLinkAddComponent);
    ref.componentRef.instance.types = this.types;
    ref.onClose.subscribe(result => {
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
      const ref = this.dialogService.open(FriendLinkDetailComponent);
      ref.componentRef.instance.friendlink = data;
      ref.componentRef.instance.types = this.types;
      ref.onClose.subscribe(result => {
        if (result) {
          this.linkService.editData(result).then(() => {
            this.getPager(1);
          });
        }
      });
    });
  }
}
