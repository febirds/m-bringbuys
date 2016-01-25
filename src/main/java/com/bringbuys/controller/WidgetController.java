package com.bringbuys.controller;

import com.alibaba.fastjson.JSONObject;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by wanp on 16-1-25.
 */
@Controller
@RequestMapping("/widget")
public class WidgetController {

    @RequestMapping(value = "/text", method = RequestMethod.POST)
    public @ResponseBody Object toText() {
        JSONObject object = new JSONObject();
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("uuid", new Date().getTime()+"");
        Template widget = this.getTemplate("text.ftl");
        Writer out = new StringWriter(2048);
        try {
            widget.process(map, out);
        } catch (TemplateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        object.put("textWidget", out.toString());
        object.put("success", true);
        return object;
    }

    private Template getTemplate(String name) {
        try {
            Configuration cfg = new Configuration();
            cfg.setClassForTemplateLoading(this.getClass(), "/templates");
            Template temp = cfg.getTemplate(name);
            return temp;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

}
