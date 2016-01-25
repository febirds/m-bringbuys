package com.bringbuys.controller;

import com.bringbuys.bean.MContent;
import com.bringbuys.service.IMContentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
    private final Logger logger = LoggerFactory.getLogger(MContentController.class);

    @RequestMapping("")
    public Object toDesktop(HttpServletRequest request) {
        ModelAndView mv = new ModelAndView();
        String mid = request.getParameter("m");
        if (mid != null) {
            MContent mContent = contentService.getMcontent(Integer.parseInt(mid));
            mv.addObject("m" , mContent);
        }
        mv.setViewName("desktop");
        return mv;
    }

}
