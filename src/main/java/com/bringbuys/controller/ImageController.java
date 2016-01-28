package com.bringbuys.controller;

import com.alibaba.fastjson.JSONObject;
import com.bringbuys.bean.Image;
import com.bringbuys.bean.User;
import com.bringbuys.service.IImageService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by wanp on 2015/12/23.
 */
@RequestMapping("/image")
public class ImageController {

    @Resource
    private IImageService imageService;

    @RequestMapping(value = "/toOwnerImages", method = RequestMethod.POST)
    public
    @ResponseBody
    Object getOwnerImages(HttpServletRequest request) {
        JSONObject object = new JSONObject();
        User user = (User) request.getSession().getAttribute("User");
        List<Image> images = imageService.queryImagesByUserName(user.getUserName());
        object.put("success", true);
        object.put("images", images);
        return object;
    }

}

