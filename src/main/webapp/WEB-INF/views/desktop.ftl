<!DOCTYPE html>
<html class="editmode" lang="zh" xmlns="http://java.sun.com/jsf/html">
<head prefix="og: http://ogp.me/ns#">
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">

    <link rel="icon" href="/images/i/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/images/i/favicon.ico" type="image/ico">
    <link rel="shortcut icon" href="/images/i/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/public/webuploader/css/webuploader.css">
    <link rel="stylesheet" href="/public/webuploader/examples/image-upload/style.css">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/public/wysihtml/css/main.css">
</head>

<body>
<div class="navbar navbar-inverse bring-nav">
    <div class="container">
        <div class="navbar-header">
            <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand hidden-sm">媒体内容</a>
        </div>
        <div class="navbar-collapse collapse" role="navigation">
            <ul class="nav navbar-nav">
                <li class="hidden-sm hidden-md"><a>首页</a></li>
                <li><a href="http://v3.bootcss.com/">项目</a></li>
                <li><a id="bring-text-add" href="#">新建文本</a></li>
                <li><a id="bring-image-manage" data-toggle="collapse" data-target="#manage_image" href="#">图片库</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right hidden-sm">
                <li><a id="bring-save" href="#">保存</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="container-fluid bring-container-color">
    <div id="manage_image" class="panel-collapse collapse">
        <div class="panel-bd">
        <#include "image_manage.ftl">
        </div>
    </div>
    <div class="row">
        <div class="col-lg-2">
            <div class="panel panel-info">
                <div class="panel-heading">页面列表</div>
                <ul class="list-group">
                    <li class="list-group-item">第1页标题</li>
                    <li class="list-group-item">第2页标题</li>
                    <li class="list-group-item">第3页标题</li>
                </ul>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="panel panel-info">
                <div class="panel-body bring-content">
                ${m.content!""}
                </div>
            </div>
        </div>
        <div class="col-lg-2">
            <div class="panel panel-info">
                <div class="panel-heading">背景</div>
                <ul class="list-group">
                    <li class="list-group-item">更换背景</li>
                    <li class="list-group-item">移除</li>
                    <li class="list-group-item">主题颜色</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<input type="hidden" name="id" value="${m.id!''}">

<script type="text/javascript" charset="utf-8" src="/js/jquery.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/js/bootstrap.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/wysihtml/dist/wysihtml-toolbar.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/wysihtml/parser_rules/parse_rule.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/wysihtml/dist/main.js"></script>
<script type="text/javascript" charset="utf-8" src="/js/core.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/dragdrop/drag-drop.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/webuploader/dist/webuploader.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/webuploader/examples/image-upload/upload.js"></script>
</body>
</html>
