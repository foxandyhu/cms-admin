import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../base-component';
import {NbDialogService} from '@nebular/theme';
import {ScoreItemService} from '../service/score-item-service';
import {ScoreItemAddComponent} from './score-item-add/score-item-add.component';
import {ScoreItemDetailComponent} from './score-item-detail/score-item-detail.component';
import {ActivatedRoute} from '@angular/router';
import {ScoreGroupService} from '../service/score-group-service';

@Component({
  selector: 'ngx-score-item',
  templateUrl: './score-item.component.html',
  styleUrls: ['./score-item.component.scss'],
})
export class ScoreItemComponent extends BaseComponent implements OnInit {

  constructor(private scoreGroupService: ScoreGroupService, private scoreItemService: ScoreItemService,
              protected injector: Injector, private dialogService: NbDialogService, private route: ActivatedRoute) {
    super(scoreItemService, injector);
  }

  private groupId: string;    //  评分组ID
  private scoreGroup: any = {name: '', id: 0};    //   评分组对象

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const groupId = params.get('groupId');
      this.groupId = groupId;
      this.getScoreGroup();
      this.loadData();
    });
  }

  /**
   * 得到评分组对象
   */
  private getScoreGroup() {
    this.scoreGroupService.getData(this.groupId).then(result => {
      this.scoreGroup = result;
      this.scoreGroup.id = this.groupId;
    });
  }

  /**
   * 加载数据
   */
  private loadData() {
    this.setQueryParams('groupId', this.groupId);
    this.getPager(1);
  }

  /**
   * 显示添加评分项
   */
  showAddScoreItem() {
    const ref = this.dialogService.open(ScoreItemAddComponent);
    ref.componentRef.instance.scoreGroup = this.scoreGroup;
    ref.onClose.subscribe(result => {
      if (result) {
        this.scoreItemService.saveData(result).then(() => {
          this.loadData();
        });
      }
    });
  }

  /**
   * 显示编辑评分项
   */
  showEditScoreItem(id: string) {
    this.scoreItemService.getData(id).then(data => {
      const ref = this.dialogService.open(ScoreItemDetailComponent);
      ref.componentRef.instance.scoreItem = data;
      ref.componentRef.instance.scoreGroup = this.scoreGroup;
      ref.onClose.subscribe(result => {
        if (result) {
          this.scoreItemService.editData(result).then(() => {
            this.loadData();
          });
        }
      });
    });
  }
}
