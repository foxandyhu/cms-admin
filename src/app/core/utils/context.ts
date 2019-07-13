import {LocalStorageUtil} from './local-storage';

/**
 * 上下文工具类
 */
export class ContextUtil {

  private static USER_KEY: string = 'user';

  /**
   * 获得本地存储的用户对象
   */
  public static getLocalUser() {
    const user = LocalStorageUtil.get(ContextUtil.USER_KEY);
    return user;
  }

  /**
   * 设置存储本地的用户对象
   * @param {string} appAuth
   */
  public static setLocalUser(user: any) {
    LocalStorageUtil.put(ContextUtil.USER_KEY, user);
  }

  /**
   * 获得储存本地的授权序列号
   * @returns {any}
   */
  public static getAppAuth(): string {
    let app_auth = ContextUtil.getLocalUser();
    app_auth = app_auth ? JSON.parse(app_auth)['_app_auth_'] : '';
    return app_auth;
  }

  /**
   * 清空上下文
   */
  public static clear() {
    LocalStorageUtil.clear();
  }
}
