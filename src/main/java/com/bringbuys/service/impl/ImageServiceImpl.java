package com.bringbuys.service.impl;

import com.bringbuys.bean.Image;
import com.bringbuys.dao.ImageMapper;
import com.bringbuys.service.IImageService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by wanp on 16-1-28.
 */
@Service("imageService")
public class ImageServiceImpl implements IImageService {

    @Resource
    private ImageMapper dao;

    @Override
    public List<Image> queryImagesByUserName(String userName) {
        return dao.selectByUserName(userName);
    }

    @Override
    public int saveImage(Image image) {
        return dao.insertImage(image);
    }
}
