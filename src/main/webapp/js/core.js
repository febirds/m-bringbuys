/**
 * Created by wanp on 16-1-17.
 */
$(function () {
    var id = $("input[name='id']").val();
    var title = $("input[name='title']").val();

    $("#bring-save").bind("click", function () {
        var content=[], left=[], top=[], type=[];
        $.each($(".bring-get"), function(k, v){
            content.push($(v).html());
            left.push($(v).parent().parent().css("left"));
            top.push($(v).parent().parent().css("top"));
            type.push($(v).data("type"));
        });
        $.post("/content/toHtml",
            {
                content: content,
                left: left,
                top: top,
                type: type,
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
                    $(".bring-content").last().append(response.textWidget);
                    var cloneObj = $(".bring-am-g").last().clone();
                }
            });
    });

    $(".bring-content").bind("click", function(){

    });

    $("#bring-image-manage").bind("click", function(){
        if ($("#manage_image").hasClass("in")) {
            $("#manage_image").collapse("hide");
        } else {
            $("#manage_image").collapse("show");
        }
        $(window).resize();
    });

    $(".imgWrap").bind("mouseover", function(){
        $(".file-panel").height(30);
    });

    $(".imgWrap").bind("mouseout", function(){
        $(".file-panel").height(0);
    });

});
