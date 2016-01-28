package com.bringbuys.service;

import com.bringbuys.bean.Image;

import java.util.List;

/**
 * Created by wanp on 16-1-28.
 */
public interface IImageService {

    List<Image> queryImagesByUserName(String userName);

    int saveImage(Image image);

}
