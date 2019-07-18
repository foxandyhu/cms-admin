import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../base-component';
import {AdSpaceService} from './service/ad-space.service';
import {NbDialogService} from '@nebular/theme';
import {SpaceAddComponent} from './space-add/space-add.component';
import {SpaceDetailComponent} from './space-detail/space-detail.component';

@Component({
  selector: 'ngx-ad-space',
  templateUrl: './ad-space.component.html',
})
export class AdSpaceComponent extends BaseComponent implements OnInit {

  constructor(private adSpaceService: AdSpaceService, protected injector: Injector,
              private dialogService: NbDialogService) {
    super(adSpaceService, injector);
  }

  ngOnInit() {
    this.getPager(1);
  }

  /**
   * 显示添加广告位
   */
  showAddAdSpace() {
    const ref = this.dialogService.open(SpaceAddComponent);
    ref.onClose.subscribe(result => {
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
      const ref = this.dialogService.open(SpaceDetailComponent);
      ref.componentRef.instance.adSpace = data;
      ref.onClose.subscribe(result => {
        if (result) {
          this.adSpaceService.editData(result).then(() => {
            this.getPager(1);
          });
        }
      });
    });
  }

}
