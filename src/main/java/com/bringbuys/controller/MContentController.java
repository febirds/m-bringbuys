package com.bringbuys.controller;

import com.alibaba.fastjson.JSONObject;
import com.bringbuys.bean.Constant;
import com.bringbuys.util.Base64;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by wanp on 16-1-21.
 */
@Controller
@RequestMapping("/content")
public class MContentController {

    private final Logger logger = LoggerFactory.getLogger(MContentController.class);
    private Configuration freemarker_cfg = null;

    @RequestMapping(value = "/toHtml", method = RequestMethod.POST)
    public
    @ResponseBody
    Object genContentHtml(HttpServletRequest request, Model model) {
        String content = request.getParameter("content");
        String userName = request.getParameter("user_name");
        String nickName = request.getParameter("nick_name");
        Date ctime = new Date();
        JSONObject object = new JSONObject();
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("content", content);
        map.put("userName", userName);
        map.put("nickName", nickName);
        map.put("ctime", ctime);
        this.geneHtmlFile("content.ftl", map, Base64.getBase64(userName), ctime.getTime()+".html");
        object.put("success", true);
        return object;
    }

    private boolean geneHtmlFile(String templateFileName, Map propMap, String htmlFilePath, String htmlFileName) {
        //@todo 从配置中取得要静态文件存放的根路径:需要改为自己的属性类调用
        String sRootDir = Constant.HTML_FILE_PATH;

        try {
            Template t = getFreeMarkerCFG().getTemplate(templateFileName);

            //如果根路径存在,则递归创建子目录
            creatDirs(sRootDir, htmlFilePath);

            File afile = new File(sRootDir + "/" + htmlFilePath + "/" + htmlFileName);

            Writer out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(afile)));

            t.process(propMap, out);
        } catch (TemplateException e) {
            logger.error("Error while processing FreeMarker template " + templateFileName, e);
            return false;
        } catch (IOException e) {
            logger.error("Error while generate Static Html File " + htmlFileName, e);
            return false;
        }

        return true;
    }

    private Configuration getFreeMarkerCFG() {
        if (null == freemarker_cfg) {
            freemarker_cfg = new Configuration();

            freemarker_cfg.setClassForTemplateLoading(this.getClass(), "templates/");
        }

        return freemarker_cfg;
    }

    private static boolean creatDirs(String aParentDir, String aSubDir) {
        File aFile = new File(aParentDir);
        if (aFile.exists()) {
            File aSubFile = new File(aParentDir + aSubDir);
            if (!aSubFile.exists()) {
                return aSubFile.mkdirs();
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

}
