package com.bringbuys.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import com.bringbuys.bean.User;
import com.bringbuys.service.IUserService;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Date;

@Controller
@RequestMapping("/user")
public class UserController {
    @Resource
    private IUserService userService;

    @RequestMapping(value = "/saveUserMessage", method = RequestMethod.POST)
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
        user.setSite(site);
        user.setMessage(message);
        user.setCtime(new Date());
        user.setUserType(user_type);
        this.userService.saveUserMessage(user);
        return "redirect:/"+page;
    }
}
