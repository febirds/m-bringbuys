package com.bringbuys.service;

import com.bringbuys.bean.User;
import com.github.pagehelper.PageInfo;

public interface IUserService {

    /*PageInfo queryUsersByConn(int startPage, int count, String userName, String startTime, String endTime);

    int saveUserMessage(User user);*/

    User checkUser(String userName, String password);
}
