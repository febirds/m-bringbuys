<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Bringbuys | 跨境说</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="renderer" content="webkit">
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <!--<link rel="alternate icon" type="image/png" href="i/favicon.png">-->
    <link rel="stylesheet" href="/public/amazeui/assets/css/amazeui.min.css"/>
    <style>
        .header {
            text-align: center;
        }
        .header h1 {
            font-size: 200%;
            color: #333;
            margin-top: 30px;
        }
        .header p {
            font-size: 14px;
        }
    </style>
</head>
<body>
<div class="header">
    <div class="am-g">
        <h1>Bringbuys</h1>
    </div>
    <hr />
</div>
<div class="am-g">
    <div class="am-u-lg-6 am-u-md-8 am-u-sm-centered">
        <h3>登录</h3>
        <hr>
        <!--<div class="am-btn-group">
          <a href="#" class="am-btn am-btn-secondary am-btn-sm"><i class="am-icon-github am-icon-sm"></i> Github</a>
          <a href="#" class="am-btn am-btn-success am-btn-sm"><i class="am-icon-google-plus-square am-icon-sm"></i> Google+</a>
          <a href="#" class="am-btn am-btn-primary am-btn-sm"><i class="am-icon-stack-overflow am-icon-sm"></i> stackOverflow</a>
        </div>-->
        <br>
        <br>

        <form method="post" class="am-form" action="/users/signin">
            <label for="user_name">用户名:</label>
            <input type="text" name="user_name" id="user_name" value="">
            <br>
            <label for="password">密码:</label>
            <input type="password" name="password" id="password" value="">
            <br>
            <!--<label for="remember-me">
              <input id="remember-me" type="checkbox">
              记住密码
            </label>-->
            <br />
            <div class="am-cf">
                <input type="button" id="submit" value="登 录" class="am-btn am-btn-primary am-btn-sm am-fl">
            </div>
        </form>
        <hr>
        <footer style="background-color: #FFFFFF" class="footer">
            <p style="text-align: center; color: white">© 2015 BRINGBUYS - MADE IN L.A.-PRIVACY POLICY-TERMS.</p>
        </footer>
    </div>
</div>
<!--[if lt IE 9]>
<script src="http://libs.baidu.com/jquery/1.11.1/jquery.min.js"></script>
<![endif]-->

<!--[if (gte IE 9)|!(IE)]><!-->
<script src="/js/jquery.min.js"></script>
<!--<![endif]-->
<script src="/js/base64.js" type="text/javascript"></script>
<script>
    $(function(){
        var loginFunc = function(){
            var val = $("#password").val();
            var b = new Base64();
            var password = b.encode(val);
            $.ajax({
                url: $(".am-form").prop("action"),
                type: 'POST',
                dataType: 'json',
                data: {'user_name':$("#user_name").val(),'password':password}
            }).done(function(data, status, xhr) {
                if (data.success) {
                    window.location.href = "/desktop";
                }
            })
        };
        $("#submit").bind("click", loginFunc);
        $(".am-form input").bind("keydown", function(e){
            if (e.keyCode == 13) {
                loginFunc();
            }
        })
    });
</script>
</body>
</html>