/**
 * Created by wanp on 16-1-17.
 */
$(function () {
    var id = $("input[name='id']").val();
    var title = $("input[name='title']").val();

    $("#bring-save").bind("click", function () {
        //var content = ue.getContent();
        $.post("/content/toHtml",
            {
                content: content,
                id: id,
                title: title
            },
            function (response) {
                if (response.success) {
                    alert("保存成功！");
                }
            });
    });

    $("bring-text-add").bind("click", function () {

    });

});
