package com.bringbuys.service.impl;

import com.bringbuys.bean.AdminUser;
import com.bringbuys.dao.AdminUserMapper;
import com.bringbuys.service.IAdminUserService;
import com.bringbuys.util.Base64;
import com.bringbuys.util.MD5;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by wanp on 2015/12/21.
 */
@Service("adminUserService")
public class AdminUserServiceImpl implements IAdminUserService {

    @Resource
    private AdminUserMapper dao;

    public AdminUser checkAdminUser(String userName, String password) {
        AdminUser user = null;
        if (password != null && !"".equals(password)) {
            String pw = MD5.GetMD5Code(Base64.getFromBase64(password));
            user = dao.selectByUserName(userName, pw);
        }
        return user;
    }
}
