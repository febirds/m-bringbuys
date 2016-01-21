package com.bringbuys.interceptor;

import com.bringbuys.bean.AdminUser;
import com.bringbuys.bean.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by wanp on 16-1-21.
 */
public class CoreInterceptor extends HandlerInterceptorAdapter {

    private final Logger log = LoggerFactory.getLogger(CoreInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response, Object handler) throws Exception {
        /*if ("GET".equalsIgnoreCase(request.getMethod())) {
            RequestUtil.saveRequest();
        }*/
        log.info("==============执行顺序: 1、preHandle================");
        String requestUri = request.getRequestURI();
        String contextPath = request.getContextPath();
        String url = requestUri.substring(contextPath.length());

        log.info("requestUri:"+requestUri);
        log.info("contextPath:"+contextPath);
        log.info("url:"+url);

        User user = (User) request.getSession().getAttribute("User");
        ModelAndView mv = new ModelAndView();
        if(user == null){
            log.info("Interceptor：跳转到login页面！");
            response.sendRedirect("/");
            return false;
        }else
            return true;
    }

    @Override
    public void postHandle(HttpServletRequest request,
                           HttpServletResponse response, Object handler,
                           ModelAndView modelAndView) throws Exception {
        log.info("==============执行顺序: 2、postHandle================");
        if(modelAndView != null){  //加入当前时间
            modelAndView.addObject("var", "测试postHandle");
        }
    }

    @Override
    public void afterCompletion(HttpServletRequest request,
                                HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
        log.info("==============执行顺序: 3、afterCompletion================");
    }

}
