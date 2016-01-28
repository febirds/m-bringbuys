package com.bringbuys.dao;

import com.bringbuys.bean.Image;

import java.util.List;

/**
 * Created by wanp on 16-1-28.
 */
public interface ImageMapper {

    List<Image> selectByUserName(String userName);

    int insertImage(Image image);

}
