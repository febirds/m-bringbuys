package com.bringbuys.service.impl;

import javax.annotation.Resource;

import com.bringbuys.util.Base64;
import com.bringbuys.util.MD5;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Service;
import com.bringbuys.bean.User;
import com.bringbuys.dao.UserMapper;
import com.bringbuys.service.IUserService;

import java.util.Date;
import java.util.List;

@Service("userService")
public class UserServiceImpl implements IUserService {

    @Resource
    private UserMapper dao;

    public User checkUser(String userName, String password) {
        User user = null;
        if (password != null && !"".equals(password)) {
            String pw = MD5.GetMD5Code(Base64.getFromBase64(password));
            user = dao.selectByUserName(userName, pw);
        }
        return user;
    }

    /*public PageInfo queryUsersByConn(int startPage, int count, String userName, String startTime, String endTime) {
        User user = new User();
        user.setUserName(userName!=null&&!"".equals(userName)?userName:null);
        PageHelper.startPage(startPage, count);
        List<User> list = this.userDao.selectByConn(user);
        return new PageInfo(list);
    }

    public int saveUserMessage(User user) {
        return this.userDao.insert(user);
    }*/



}
