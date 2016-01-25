/**
 * Created by wanp on 16-1-17.
 */
$(function () {
    var id = $("input[name='id']").val();
    var title = $("input[name='title']").val();

    $("#bring-save").bind("click", function () {
        var content="", left="", top="";
        $.each($(".bring-get"), function(k, v){
            content += "$" + $(v).html();
            left += "$" + $(v).parent().parent().css("left");
            top += "$" + $(v).parent().parent().css("top");
        });
        $.post("/content/toHtml",
            {
                content: content.substring(1),
                left: left.substring(1),
                top: top.substring(1),
                id: id,
                title: title
            },
            function (response) {
                if (response.success) {
                    alert("保存成功！");
                }
            });
    });

    $("#bring-text-add").bind("click", function () {
        $.post("/widget/text", null,
            function (response) {
                if (response.success) {
                    $(".bring-am-g").last().append(response.textWidget);
                    var cloneObj = $(".bring-am-g").last().clone();
                    $(document).resize();
                }
            });
    });

});
