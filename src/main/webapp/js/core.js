/**
 * Created by febirds on 16-1-17.
 */
$(function () {
    var ue = UE.getEditor('editor');
    $("#bring-save").bind("click", function () {
        var content = ue.getContent();
        var user_name = "wanp";
        var nick_name = "中"
        $.post("/content/toHtml", {content: content}, function () {

        });
    });
});
