import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {ScoreGroupAddComponent} from './score-group-add/score-group-add.component';
import {ScoreGroupDetailComponent} from './score-group-detail/score-group-detail.component';
import {NbDialogService} from '@nebular/theme';
import {ScoreGroupService} from '../service/score-group-service';

@Component({
  selector: 'ngx-score-group',
  templateUrl: './score-group.component.html',
  styleUrls: ['./score-group.component.scss'],
})
export class ScoreGroupComponent extends BaseComponent implements OnInit {

  constructor(private scoreGroupService: ScoreGroupService,
              protected injector: Injector, private dialogService: NbDialogService) {
    super(scoreGroupService, injector);
  }

  ngOnInit() {
    this.getPager(1);
  }

  /**
   * 显示添加评分组
   */
  showAddScoreGroup() {
    const ref = this.dialogService.open(ScoreGroupAddComponent);
    ref.onClose.subscribe(result => {
      if (result) {
        this.scoreGroupService.saveData(result).then(() => {
          this.getPager(1);
        });
      }
    });
  }

  /**
   * 显示编辑评分组
   */
  showEditScoreGroup(id: string) {
    this.scoreGroupService.getData(id).then(data => {
      const ref = this.dialogService.open(ScoreGroupDetailComponent);
      ref.componentRef.instance.scoreGroup = data;
      ref.onClose.subscribe(result => {
        if (result) {
          this.scoreGroupService.editData(result).then(() => {
            this.getPager(1);
          });
        }
      });
    });
  }
}
