package com.bringbuys.service.impl;

import javax.annotation.Resource;

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
    private UserMapper userDao;


    public PageInfo queryUsersByConn(int startPage, int count, String userName, String startTime, String endTime) {
        User user = new User();
        user.setUserName(userName!=null&&!"".equals(userName)?userName:null);
        user.setStartTime(startTime!=null&&!"".equals(startTime)?startTime:null);
        user.setEndTime(endTime!=null&&!"".equals(endTime)?endTime:null);
        PageHelper.startPage(startPage, count);
        List<User> list = this.userDao.selectByConn(user);
        return new PageInfo(list);
    }

    public int saveUserMessage(User user) {
        return this.userDao.insert(user);
    }

    public int delUserMessage(Integer id) {
        return this.userDao.deleteById(id);
    }


}
