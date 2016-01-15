package com.bringbuys.dao;

import com.bringbuys.bean.User;

import java.util.List;

public interface UserMapper {

    int insert(User record);

    int deleteById(Integer id);

    List<User> selectByConn(User user);
}