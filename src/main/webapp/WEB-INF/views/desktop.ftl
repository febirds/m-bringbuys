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
    <link rel="stylesheet" href="/public/amazeui/assets/css/amazeui.min.css">
    <link rel="stylesheet" href="/public/wysihtml/css/main.css">
    <link rel="stylesheet" href="/public/webuploader/css/webuploader.css">
    <link rel="stylesheet" href="/public/webuploader/examples/image-upload/style.css">
</head>

<body>
<header class="am-topbar"><h1 class="am-topbar-brand"><a href="#">媒体内容</a></h1>
    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
            data-am-collapse="{target: '#doc-topbar-collapse'}"> <span
            class="am-icon-bars"></span></button>
    <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
        <ul class="am-nav am-nav-pills am-topbar-nav bring-topbar">
            <li class="am-active"><a href="#">首页</a></li>
            <li><a href="#">项目</a></li>
            <li><a id="bring-text-add" href="#">新建文本</a></li>
            <li><a id="bring-image-manage" data-am-collapse="{target: '#manage_image'}"
                   href="javascript:void(0)">图片库</a></li>
        </ul>
        <form class="am-topbar-form am-topbar-left am-form-inline" role="search">
            <div class="am-form-group"><input type="text" class="am-form-field am-input-sm" placeholder="搜索"></div>
        </form>
        <div class="am-topbar-right">
            <div class="am-dropdown" data-am-dropdown="{boundary: '.am-topbar'}">
                <button class="am-btn am-btn-secondary am-topbar-btn am-btn-sm am-dropdown-toggle"
                        data-am-dropdown-toggle="">其他 <span class="am-icon-caret-down"></span></button>
                <ul class="am-dropdown-content">
                    <li><a href="#">注册</a></li>
                    <li><a href="#">随便看看</a></li>
                </ul>
            </div>
        </div>
        <div class="am-topbar-right">
            <button id="bring-save" class="am-btn am-btn-primary am-topbar-btn am-btn-sm">保存</button>
        </div>
    </div>
</header>
<div id="manage_image" class="am-panel-collapse am-collapse">
    <div class="am-panel-bd">
    <#include "image_manage.ftl">
    </div>
</div>
<div class="am-g">
    <div class="am-u-lg-2 bring-nav">
        <ul class="am-nav">
            <li class="am-nav-header">页面列表</li>
            <li><a href="#">第1页标题</a></li>
            <li><a href="#">第2页标题</a></li>
            <li class="am-nav-divider"></li>
        </ul>
    </div>
    <div class="am-u-lg-8 bring-content">
    ${m.content!""}
    </div>
    <div class="am-u-lg-2 bring-nav">
        <ul class="am-nav bring-type-page">
            <li class="am-nav-header">背景</li>
            <li><a href="#">更换背景</a></li>
            <li><a href="#">移除</a></li>
            <li class="am-nav-divider"></li>
            <li><a href="#">主题颜色</a></li>
        </ul>
    </div>
</div>
<input type="hidden" name="id" value="${m.id!''}">

<script type="text/javascript" charset="utf-8" src="/js/jquery.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/amazeui/assets/js/amazeui.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/wysihtml/dist/wysihtml-toolbar.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/wysihtml/parser_rules/parse_rule.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/wysihtml/dist/main.js"></script>
<script type="text/javascript" charset="utf-8" src="/js/core.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/dragdrop/drag-drop.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/webuploader/dist/webuploader.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/webuploader/examples/image-upload/upload.js"></script>
</body>
</html>
