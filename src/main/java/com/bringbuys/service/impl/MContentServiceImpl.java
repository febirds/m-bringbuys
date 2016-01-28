package com.bringbuys.service.impl;

import com.bringbuys.bean.MContent;
import com.bringbuys.dao.MContentMapper;
import com.bringbuys.service.IMContentService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by wanp on 16-1-21.
 */
@Service("contentService")
public class MContentServiceImpl implements IMContentService{

    @Resource
    private MContentMapper dao;

    public int saveMContent(MContent content, boolean isUpdate) {
        if (isUpdate) {
            return dao.updateMContent(content);
        } else {
            return dao.insertMContent(content);
        }
    }

    public MContent getMContent(String id) {
        return dao.selectMContentById(id);
    }
}
