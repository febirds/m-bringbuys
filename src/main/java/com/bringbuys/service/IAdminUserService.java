package com.bringbuys.service;

import com.bringbuys.bean.AdminUser;

/**
 * Created by wanp on 2015/12/21.
 */
public interface IAdminUserService {

    AdminUser checkAdminUser(String userName, String password);

}
