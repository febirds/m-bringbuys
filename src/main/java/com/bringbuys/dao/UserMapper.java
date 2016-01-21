package com.bringbuys.dao;

import com.bringbuys.bean.User;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {

    User selectByUserName(@Param("userName") String userName, @Param("password") String password);

}