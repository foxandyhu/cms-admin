/**
 * 系统接口列表类
 */
export class AppApi {

  /**
   * 服务根域名
   */
  static ROOT_URI = 'http://127.0.0.1';

  /**
   * 是否属于后台接口的标识
   */
  static API_FLAG = '/manage';

  /**
   * 用户模块
   */
  static USERS = {
    login: '/manage/user/login.html',
    logout: '/manage/user/logout.html',
  };

  /**
   * 日志模块
   */
  static LOGS = {
    sys_logs_list: '/manage/logs/sys/list.html',
    sys_logs_del: '/manage/logs/sys/del.html',
  };
}
