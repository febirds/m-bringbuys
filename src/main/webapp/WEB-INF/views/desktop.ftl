<!DOCTYPE html>
<html class="editmode" lang="zh">
<head prefix="og: http://ogp.me/ns#">
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">

    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/favicon.ico" type="image/ico">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/public/amazeui/assets/css/amazeui.min.css">
</head>

<body style="overflow-x: hidden">
<header class="am-topbar"><h1 class="am-topbar-brand"><a href="#">媒体内容</a></h1>
    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
            data-am-collapse="{target: '#doc-topbar-collapse'}"> <span
            class="am-icon-bars"></span></button>
    <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
        <ul class="am-nav am-nav-pills am-topbar-nav">
            <li class="am-active"><a href="#">首页</a></li>
            <li><a href="#">项目</a></li>
            <li class="am-dropdown" data-am-dropdown=""><a class="am-dropdown-toggle" data-am-dropdown-toggle=""
                                                           href="javascript:;">下拉 <span
                    class="am-icon-caret-down"></span></a>
                <ul class="am-dropdown-content">
                    <li class="am-dropdown-header">标题</li>
                    <li><a href="#">1. 去月球</a></li>
                    <li class="am-active"><a href="#">2. 去火星</a></li>
                    <li><a href="#">3. 还是回地球</a></li>
                    <li class="am-disabled"><a href="#">4. 下地狱</a></li>
                    <li class="am-divider"></li>
                    <li><a href="#">5. 桥头一回首</a></li>
                </ul>
            </li>
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
<div class="am-g">
    <div style="height: 100px" class="am-u-lg-2"></div>
    <div class="am-u-lg-8">
        <script id="editor" type="text/plain" style="width:100%;height:800px;"></script>
    </div>
    <div style="height: 100px" class="am-u-lg-2"></div>
</div>

<script type="text/javascript" charset="utf-8" src="/js/jquery.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/amazeui/assets/js/amazeui.min.js"></script>

<script type="text/javascript" charset="utf-8" src="/public/ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/ueditor/ueditor.all.js"></script>
<script type="text/javascript" charset="utf-8" src="/public/ueditor/lang/zh-cn/zh-cn.js"></script>
<script>
    $(function(){
        var ue = UE.getEditor('editor');
        ue.ready(function() {
            ue.setContent('${m.content!''}');
        });
        $("#bring-save").bind("click", function () {
            var content = ue.getContent();
            $.post("/content/toHtml", {content: content, user_name:user_name, nick_name:nick_name}, function (response) {
                if (response.success) {
                    alert("保存成功！");
                }
            });
        });
    });
</script>
</body>
</html>