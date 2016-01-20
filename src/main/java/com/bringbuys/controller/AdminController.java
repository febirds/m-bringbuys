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

    @RequestMapping(value="/userMessage",method=RequestMethod.GET)
    public Object queryUserMessageList(HttpServletRequest request) {
        AdminUser user = (AdminUser) request.getSession().getAttribute("AdminUser");
        if (user != null) {
            String userName = request.getParameter("user_name");
            String startTime = request.getParameter("start_time");
            String endTime = request.getParameter("end_time");
            String startPage = request.getParameter("start_page");
            String countPage = request.getParameter("countPage");
            int start = 1, count = 10;
            if (startPage != null) {
                start = Integer.parseInt(startPage);
            }
            if (countPage != null) {
                count = Integer.parseInt(countPage);
            }
            ModelAndView mv = new ModelAndView();
            PageInfo page = userService.queryUsersByConn(start, count, userName, startTime, endTime);
            mv.addObject("users", page);
            mv.setViewName("desktop");
            return mv;
        }
        return null;
    }

    @RequestMapping(value="/delUserMessage",method=RequestMethod.POST)
    public Object deleteUserMessageByID(HttpServletRequest request) {
        AdminUser user = (AdminUser) request.getSession().getAttribute("AdminUser");
        if (user != null) {
            Integer id = null;
            String idStr = request.getParameter("id");
            if (idStr != null) {
                id = Integer.parseInt(idStr);
            }
            userService.delUserMessage(id);
        }
        return "desktop";
    }

    @RequestMapping(value = "/content", method = RequestMethod.POST, produces = "text/javascript; charset=UTF-8")
    public @ResponseBody
    Object toContent(HttpServletRequest request, HttpServletResponse response, Model model) {
        String name = request.getParameter("name");
        String partials_id = request.getParameter("partials_id");
        String page_id = request.getParameter("page_id");
        return "Edicy.jQuery(function($) {debugger;var contentArea = $('.edy-ca[data-name=\""+name+"\"][data-page-id=\""+page_id+"\"][data-page-type=\"Page\"]');contentArea.find('.edy-content-elements').append('<div class=\\\"partial edy-partial-view edy-content-element\\\" data-delete-path=\\\"/admin/content/partials/"+partials_id+"\\\" data-partial-id=\\\""+partials_id+"\\\" data-relocate-path=\\\"/admin/content/partials/"+partials_id+"/relocate\\\" id=\\\"partial_"+partials_id+"\\\">\\n  <div class=\\\"edy-partial-draghandles edy-partial-draghandles-visible\\\"><div class=\\\"edy-partial-draghandle edy-partial-draghandle-top\\\"><\\/div><div class=\\\"edy-partial-draghandle edy-partial-draghandle-right\\\"><\\/div><div class=\\\"edy-partial-draghandle edy-partial-draghandle-bottom\\\"><\\/div><div class=\\\"edy-partial-draghandle edy-partial-draghandle-left\\\"><\\/div><\\/div>\\n  <div class=\\\"text_partial edy-partial-content-view edy-textpartial-view edy-texteditor-view edy-accepts-assets edy-accepts-embeds\\\" data-content-type=\\\"text\\\" data-placeholder=\\\"Go on, start typing...\\\" data-textpartial-id=\\\""+partials_id+"\\\" id=\\\"text_partial_"+partials_id+"\\\">\\n<\\/div>\\n<\\/div>');contentArea.find('.edy-content-elements').trigger('partials:create');new Edicy.PartialView({el: $('#partial_"+partials_id+"'), focus: true}).render();});";
    }

}
