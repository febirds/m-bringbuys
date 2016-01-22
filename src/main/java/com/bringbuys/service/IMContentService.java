package com.bringbuys.service;

import com.bringbuys.bean.MContent;

/**
 * Created by wanp on 16-1-21.
 */
public interface IMContentService {

    int saveMContent(MContent content);

    MContent getMcontent(int id);

}
