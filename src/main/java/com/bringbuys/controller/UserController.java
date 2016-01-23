package com.bringbuys.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import com.alibaba.fastjson.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import com.bringbuys.bean.User;
import com.bringbuys.service.IUserService;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/users")
public class UserController {
    @Resource
    private IUserService service;

    /*@RequestMapping(value = "/saveUserMessage", method = RequestMethod.POST)
    public String saveUserMessage(HttpServletRequest request, Model model) {
        String user_name = request.getParameter("user_name");
        String phone = request.getParameter("phone");
        String email = request.getParameter("email");
        String site = request.getParameter("site");
        String message = request.getParameter("message");
        String page = request.getParameter("page");
        String user_type = request.getParameter("user_type");
        User user = new User();
        user.setUserName(user_name);
        user.setPhone(phone);
        user.setEmail(email);
        user.setCtime(new Date());
        this.userService.saveUserMessage(user);
        return "redirect:/"+page;
    }*/

    @RequestMapping(value = "/signin", method = RequestMethod.POST)
    public @ResponseBody
    Object toLogin(HttpServletRequest request, Model model) {
        String userName = request.getParameter("user_name");
        String password = request.getParameter("password");
        User user = service.checkUser(userName, password);
        JSONObject object = new JSONObject();
        if (user != null) {
            request.getSession().setAttribute("User", user);
            object.put("success", true);
        } else {
            object.put("success", false);
        }
        return object;
    }

    @RequestMapping("/logout")
    public String toLogout(HttpServletRequest request, Model model) {
        request.getSession().removeAttribute("User");
        return "/";
    }

}
