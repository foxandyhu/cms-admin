import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from '../base-component';
import {AdSpaceService} from './service/ad-space.service';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {SpaceAddComponent} from './space-add/space-add.component';
import {SpaceDetailComponent} from './space-detail/space-detail.component';

@Component({
  selector: 'ngx-ad-space',
  templateUrl: './ad-space.component.html',
})
export class AdSpaceComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(private adSpaceService: AdSpaceService, protected injector: Injector,
              private dialogService: NbDialogService) {
    super(adSpaceService, injector);
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
   * 显示添加广告位
   */
  showAddAdSpace() {
    this.dialog = this.dialogService.open(SpaceAddComponent);
    this.dialog.onClose.subscribe(result => {
      if (result) {
        this.adSpaceService.saveData(result).then(() => {
          this.getPager(1);
        });
      }
    });
  }

  /**
   * 显示编辑广告位
   */
  showEditAdSpace(id: string) {
    this.adSpaceService.getData(id).then(data => {
      this.dialog = this.dialogService.open(SpaceDetailComponent);
      this.dialog.componentRef.instance.adSpace = data;
      this.dialog.onClose.subscribe(result => {
        if (result) {
          this.adSpaceService.editData(result).then(() => {
            this.getPager(1);
          });
        }
      });
    });
  }

}
