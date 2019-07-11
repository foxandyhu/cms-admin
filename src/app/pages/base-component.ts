import {ModalUtil, ToastUtil} from '../@theme/components';
import {IBaseService} from './ibase.service';
import 'bootstrapvalidator';
import {Injector} from '@angular/core';

declare var jQuery: any;

/**
 *基本的component 封装了一些常用的方法
 */
export class BaseComponent {

  constructor(private baseService: IBaseService, protected injector: Injector) {
    this._modalUtil = injector.get(ModalUtil);
    this._toastUtil = injector.get(ToastUtil);
  }

  private readonly _modalUtil: ModalUtil;
  private readonly _toastUtil: ToastUtil;

  private _pager: any;       // 分页对象
  private _isSelectAll: boolean = false; // 是否全部选中
  private _selectItems: Array<number> = new Array<number>(); // 选中的ID
  private _queryParams = new Map();   // 查询条件

  get modalUtil(): ModalUtil {
    return this._modalUtil;
  }

  get toastUtil(): ToastUtil {
    return this._toastUtil;
  }

  get pager(): any {
    return this._pager;
  }

  set pager(value: any) {
    this._pager = value;
  }

  get isSelectAll(): boolean {
    return this._isSelectAll;
  }

  set isSelectAll(value: boolean) {
    this._isSelectAll = value;
  }

  get selectItems(): Array<number> {
    return this._selectItems;
  }

  set selectItems(value: Array<number>) {
    this._selectItems = value;
  }

  /**
   * 设置查询参数
   * @param key
   * @param value
   */
  setQueryParams(key: string, value: any) {
    this._queryParams.set(key, value);
  }

  /**
   * 全选事件
   * @param isSelectAll
   */
  changeAllBox(isSelectAll) {
    this._isSelectAll = isSelectAll;
    if (isSelectAll) {
      const items: Array<any> = this._pager.data;
      items.forEach((item, index, array) => {
        if (this._selectItems.indexOf(item.id) < 0) {
          this._selectItems.push(item.id);
        }
      });
    } else {
      this._selectItems.splice(0, this._selectItems.length);
    }
  }

  /**
   * 单个复选框选择事件
   */
  changeBox(isSelect, id) {
    if (isSelect) {
      if (this._selectItems.indexOf(id) < 0) {
        this._selectItems.push(id);
      }
    } else {
      const index = this._selectItems.indexOf(id);
      if (index >= 0) {
        this._selectItems.splice(index, 1);
      }
    }
  }

  /**
   * 删除数据
   * @param id 数据ID或数组
   */
  del(id) {
    const ids = new Array();
    ids.push(id);
    this.doDel(ids);
  }

  /**
   * 批量删除数据
   */
  delMutil() {
    if (this.selectItems.length > 0) {
      this.doDel(this.selectItems);
    } else {
      this.toastUtil.showWarning('请选择要删除的数据!');
    }
  }

  private doDel(ids: Array<number>) {
    this.modalUtil.confirm('删除提示', '您确认要删除该数据吗?').then(result => {
      if (result) {
        this.baseService.delData(ids).then(() => {
          this.toastUtil.showSuccess('删除成功!');
          this.getPager(this.pager.pageNo);
        });
      }
    });
  }

  /**
   * 分页列表
   */
  getPager(pageNo: number) {
    this._queryParams.forEach((value, key, map) => {
      if (!value) {     // 去掉空值
        map.delete(key);
      }
    });
    this.setQueryParams('pageNo', pageNo);
    const result: Promise<any> = this.baseService.getPager(this._queryParams);
    result.then(data => {
      this.pager = data;
      this.isSelectAll = false;
      this.selectItems = new Array<number>();
    });
  }

  /**
   * 分页事件
   * @param pageNo
   */
  changePager(pageNo: number) {
    this.getPager(pageNo);
  }

  /**
   * 表单验证
   */
  initValidateForm(formId: string, fields: any) {
    jQuery('#' + formId).bootstrapValidator({
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh',
      },
      fields: fields,
    });
  }

  /**
   * 表单是否验证成功
   * @param formId
   */
  isValidForm(formId: string): boolean {
    jQuery('#' + formId).data('bootstrapValidator').validate();
    const flag = jQuery('#' + formId).data('bootstrapValidator').isValid();
    return flag;
  }

}
