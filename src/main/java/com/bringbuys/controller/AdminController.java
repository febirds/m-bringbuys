package com.bringbuys.controller;

import com.alibaba.fastjson.JSONObject;
import com.bringbuys.bean.AdminUser;
import com.bringbuys.service.IAdminUserService;
import com.bringbuys.service.IUserService;
import com.github.pagehelper.PageInfo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

/**
 * 后台控制器
 * Created by wanp on 2015/12/21.
 */
@Controller
@RequestMapping("/admin")
public class AdminController {

    @Resource
    private IAdminUserService service;
    @Resource
    private IUserService userService;

    @RequestMapping("")
    public Object toIndex(HttpServletRequest request, Model model) {
        AdminUser user = (AdminUser) request.getSession().getAttribute("AdminUser");
        ModelAndView mv = new ModelAndView();
        if (user == null) {
            mv.setViewName("login");
        } else {
            mv.setViewName("desktop");
        }
        return mv;
    }

    @RequestMapping(value = "/signin", method = RequestMethod.POST)
    public @ResponseBody
    Object toLogin(HttpServletRequest request, Model model) {
        String userName = request.getParameter("user_name");
        String password = request.getParameter("password");
        AdminUser user = service.checkAdminUser(userName, password);
        JSONObject object = new JSONObject();
        if (user != null) {
            request.getSession().setAttribute("AdminUser", user);
            object.put("success", true);
        } else {
            object.put("success", false);
        }
        return object;
    }

    @RequestMapping(value = "/content", method = RequestMethod.POST, produces = "text/javascript; charset=UTF-8")
    public @ResponseBody
    Object toContent(HttpServletRequest request, HttpServletResponse response, Model model) {
        String name = request.getParameter("name");
        String partials_id = request.getParameter("partials_id");
        String page_id = request.getParameter("page_id");
        return "";
    }

}
