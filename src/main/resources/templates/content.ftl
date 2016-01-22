<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Bringbuys | 宾佰</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=0.3,maximum-scale=1,user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="renderer" content="webkit">
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <link rel="alternate icon" type="image/png" href="/i/favicon.ico">
    <link rel="stylesheet" href="/css/amazeui.min.css"/>
    <link rel="stylesheet" href="/css/style.css"/>
</head>
<body>
<div class="am-g">
    <div style="left: 30%;margin-top: 6%" class="am-u-lg-5">
        <article class="am-article">
            <div class="am-article-hd">
                <h1 class="am-article-title">${title!""}</h1>
                <p class="am-article-meta">${auther!""} &nbsp;&nbsp;&nbsp;${(ctime!)?string("yyyy-MM-dd")}</p>
            </div>

            <div class="am-article-bd">
                <p>${content!""}</p>
            </div>
        </article>
    </div>
</div>
</body>
</html>