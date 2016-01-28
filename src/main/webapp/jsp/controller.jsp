<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%--<%@ page import="com.alibaba.fastjson.JSONObject" %>
<%@ page import="java.util.Map" %>--%>
<%@ page import="com.bringbuys.common.ActionEnter" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%

    request.setCharacterEncoding( "utf-8" );
	response.setHeader("Content-Type" , "text/html");
	
	String rootPath = application.getRealPath( "/" );
	String json = new ActionEnter( request, rootPath ).exec();
	out.write(json);
	/*Object object = JSONObject.parse(json);
	Map<String, String> map = (Map<String, String>) object;
	String url = map.get("url");*/
	
%>