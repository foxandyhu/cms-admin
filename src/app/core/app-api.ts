/**
 * 系统接口列表类
 */
export class AppApi {

  /**
   * 服务根域名
   */
  static ROOT_URI = 'http://192.168.8.113';

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
    user_list: '/manage/user/list.html',
    user_del: '/manage/user/del.html',
    user_add: '/manage/user/add.html',
    user_detail: '/manage/user/{}.html',
    user_edit: '/manage/user/edit.html',
    role_all: '/manage/user/role/all.html',
    role_list: '/manage/user/role/list.html',
    role_del: '/manage/user/role/del.html',
    role_add: '/manage/user/role/add.html',
    role_edit: '/manage/user/role/edit.html',
    role_detail: '/manage/user/role/{}.html',
    role_recycle: '/manage/user/recycle/{:userId}-{:roleId}.html',
    role_menu: '/manage/user/role/menu/{:roleId}.html',
    role_grant: '/manage/user/role/menu/grant.html',
  };

  /**
   * 日志模块
   */
  static LOGS = {
    sys_logs_list: '/manage/logs/sys/list.html',
    sys_logs_del: '/manage/logs/sys/del.html',
  };

  /**
   * 文件资源模块
   * @type {{file_upload: string}}
   */
  static FILES = {
    file_upload: '/manage/file/upload.html',
  };

  /**
   * 系统模块
   */
  static SYSTEM = {
    menu_list: '/manage/menu/list.html',
    menu_add: '/manage/menu/add.html',
    menu_edit: '/manage/menu/edit.html',
    menu_del: '/manage/menu/del.html',
  };
}
