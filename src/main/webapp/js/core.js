/**
 * Created by febirds on 16-1-17.
 */
$(function () {
    $("#bring-save").bind("click", function () {
        var content = ue.getContent();
        var user_name = "wanp";
        var nick_name = "中"
        $.post("/content/toHtml", {content: content, user_name:user_name, nick_name:nick_name}, function (response) {
            if (response.success) {
                alert("保存成功！");
            }
        });
    });
});
