package com.bringbuys.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by wanp on 2015/12/18.
 */

@Controller
public class PageController {

    @RequestMapping("/desktop")
    public String toDesktop(HttpServletRequest request, Model model) {
        return "desktop";
    }



    @RequestMapping("/logout")
    public String toLogout(HttpServletRequest request, Model model) {
        request.getSession().removeAttribute("AdminUser");
        return "login";
    }

}
