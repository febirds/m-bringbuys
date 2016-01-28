package com.bringbuys.controller;

import com.bringbuys.bean.MContent;
import com.bringbuys.service.IMContentService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * Created by wanp on 2015/12/18.
 */

@Controller
@RequestMapping("/desktop")
public class DesktopController {

    @Resource
    private IMContentService contentService;

    @RequestMapping("")
    public Object toDesktop(HttpServletRequest request) {
        ModelAndView mv = new ModelAndView();
        String mid = request.getParameter("m");
        if (mid != null) {
            MContent mContent = contentService.getMContent(mid);
            mv.setViewName("/protected/"+mContent.getLinkurl());
        } else {
            mv.setViewName("desktop");
        }
        return mv;
    }

}
