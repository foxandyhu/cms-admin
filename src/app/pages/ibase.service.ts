/**
 * 抽象接口,所有的service需要实现该接口
 */
export interface IBaseService {

  /**
   * 数据列表
   */
  getPager(params: Map<string, string>): Promise<any>;

  /**
   * 删除数据
   */
  delData(ids: Array<number>): Promise<any>;
}
