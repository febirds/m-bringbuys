package com.bringbuys.dao;

import com.bringbuys.bean.AdminUser;
import org.apache.ibatis.annotations.Param;

/**
 * Created by wanp on 2015/12/21.
 */
public interface AdminUserMapper {

    AdminUser selectByUserName(@Param("userName") String userName, @Param("password") String password);

}
