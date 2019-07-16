import {Component, Injector, OnInit} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {MenuAddComponent} from './menu-add/menu-add.component';
import {BaseComponent} from '../../base-component';
import {MenuService} from '../service/menu-service';
import {forkJoin} from 'rxjs';
import {MenuDetailComponent} from './menu-detail/menu-detail.component';

@Component({
  selector: 'ngx-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent extends BaseComponent implements OnInit {

  constructor(private menuService: MenuService, protected injector: Injector, private dialogService: NbDialogService) {
    super(menuService, injector);
  }

  ngOnInit() {
    this.getMenus();


  }

  selectNode: any = {id: 0, name: '根节点', level: 0};   //  选中的节点
  list: Array<any> = new Array();

  /**
   * 系统菜单列表
   */
  getMenus() {
    const arr = [this.getPager(1)];
    const observable = forkJoin(arr);
    observable.subscribe(() => {
      this.list = this.pager.data;
    });
  }

  /**
   * 清除选中节点
   */
  clearSelectNode() {
    this.selectNode = {id: 0, name: '根节点', level: 0};   //  选中的节点
  }

  /**
   * 弹出添加菜单模态框
   */
  showAddNode() {
    const ref = this.dialogService.open(MenuAddComponent);
    ref.componentRef.instance.parentMenuName = this.selectNode.name;
    ref.onClose.subscribe(menu => {
      if (menu) {
        menu.level = this.selectNode.level + 1;
        if (this.selectNode.id !== 0) {
          menu.parent = {id: '0'};
          menu.parent.id = this.selectNode.id;
        }
        this.menuService.saveData(menu).then(() => {
          this.getMenus();
        });
      }
      this.clearSelectNode();
    });
  }

  /**
   * 弹出编辑菜单模态框
   */
  showEditNode(item: any) {
    const ref = this.dialogService.open(MenuDetailComponent);
    ref.componentRef.instance.menu = {id: item.id, name: item.name, url: item.url};
    ref.onClose.subscribe(menu => {
      if (menu) {
        this.menuService.editData(menu).then(() => {
          this.getMenus();
        });
      }
      this.clearSelectNode();
    });
  }


  /**
   * 删除菜单
   * @param id
   */
  delMenu(id) {
    super.del(id).then(result => {
      if (result) {
        this.getMenus();
      }
      this.clearSelectNode();
    });
  }
}
