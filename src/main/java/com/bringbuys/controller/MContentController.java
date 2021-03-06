package com.bringbuys.controller;

import com.alibaba.fastjson.JSONObject;
import com.bringbuys.bean.Constant;
import com.bringbuys.bean.MContent;
import com.bringbuys.bean.User;
import com.bringbuys.service.IMContentService;
import com.bringbuys.util.Base64;
import com.bringbuys.util.MD5;
import com.bringbuys.util.UUIDGenerator;
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

import javax.annotation.Resource;
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

    @Resource
    private IMContentService contentService;
    private final Logger logger = LoggerFactory.getLogger(MContentController.class);
    private Configuration freemarker_cfg = null;

    @RequestMapping(value = "/toHtml", method = RequestMethod.POST)
    public
    @ResponseBody
    Object genContentHtml(HttpServletRequest request, Model model) {
        JSONObject object = new JSONObject();
        try {
            String title = request.getParameter("title");
            String projectId = request.getParameter("projectId");
            String[] content = request.getParameterValues("content[]");
            String[] left = request.getParameterValues("left[]");
            String[] top = request.getParameterValues("top[]");
            String[] type = request.getParameterValues("type[]");
            String id = request.getParameter("id");
            User user = (User) request.getSession().getAttribute("User");
            Date ctime = null;
            String path = MD5.GetMD5Code(user.getUserName() == null ? "public" : user.getUserName());
            String linkurl = "";
            MContent mContent = null;
            boolean isUpdate = false;
            if (id != null && !"".equals(id)) {
                isUpdate = true;
                mContent = contentService.getMContent(id);
                ctime = mContent.getCtime();
                mContent.setUtime(new Date());
                mContent.setIsUse(1);
            } else {
                ctime = new Date();
                linkurl = path + Base64.getBase64(path + ctime.getTime()) + ".html";
                mContent = new MContent();
                mContent.setId(UUIDGenerator.getUUID());
                mContent.setLinkurl(linkurl);
                mContent.setAuther(user.getNickName());
                mContent.setCtime(ctime);
                mContent.setUserName(user.getUserName());
                mContent.setProjectId(projectId!=null&&!"".equals(projectId)?Integer.parseInt(projectId):0);
            }
            String[] htmls = this.renderer(mContent.getId(), content, left, top, type);
            mContent.setTitle(title);
            mContent.setContent(htmls[0]);
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("m", mContent);
            this.geneHtmlFile(request, "content.ftl", map, "/static/" + path, Base64.getBase64(path + ctime.getTime()) + ".html");
            Map<String, Object> editMap = new HashMap<String, Object>();
            MContent m = (MContent) map.get("m");
            m.setContent(htmls[1]);
            editMap.put("m", m);
            this.geneHtmlFile(request, "content_editable.ftl", map, "/desktop/" + path, Base64.getBase64(path + ctime.getTime()) + ".html");
            contentService.saveMContent(mContent, isUpdate);
            object.put("success", true);
        } catch (RuntimeException e) {
            e.printStackTrace();
            object.put("success", false);
        }
        return object;
    }

    private String[] renderer(String uuid, String[] contents, String[] lefts, String[] tops, String[] types) {
        String[] htmls = new String[2];
        Template widget = null, widgetEditable = null;
        Map<String, Object> map = new HashMap<String, Object>();
        Writer out = new StringWriter(2048);
        Writer outEditable = new StringWriter(2048);
        try {
            for (int i = 0; i < types.length; i++) {
                map.put("content", contents[i]);
                map.put("left", lefts.length > i ? "margin-left:" + lefts[i] + ";" : "");
                map.put("top", tops.length > i ? "margin-top:" + tops[i] + ";" : "");
                map.put("uuid", uuid + i + "");
                widget = getFreeMarkerCFG().getTemplate("widget.ftl");
                widgetEditable = getFreeMarkerCFG().getTemplate(types[i] + ".ftl");
                widget.process(map, out);
                widgetEditable.process(map, outEditable);
            }
            htmls[0] = out.toString();
            htmls[1] = outEditable.toString();
        } catch (TemplateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return htmls;
    }

    private boolean geneHtmlFile(HttpServletRequest request, String templateFileName, Map propMap,
                                 String htmlFilePath, String htmlFileName) {
        String sRootDir = request.getSession().getServletContext().getRealPath("/");

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

            freemarker_cfg.setClassForTemplateLoading(this.getClass(), "/templates");
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
