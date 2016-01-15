/**
 * Created by wanp on 2015/12/16.
 */
$(function () {
    /*$("#submit").bind("click", function () {
        var param = {};
        var input = $("form[name='userInfoForm']").find("input");
        $.each(input, function (k, v) {
            param[v.name] = v.value;
        });
        param["message"] = $("#doc-ipt-5").val();
        $.ajax({
            url: "/user/saveUserMessage",
            type: 'POST',
            data: param,
            dataType: 'json'
        }).done(function (data, status, xhr) {
            $('#my-alert').modal();
            $("form[name='userInfoForm']")[0].reset();
        }).fail(function (xhr, status, error) {
        });
    });*/
    $("p[name='more']").bind("click", function () {
        $("html,body").animate({scrollTop: $(this).offset().top + 250}, 1000);
    });
    $("a[name='register']").bind("click", function () {
        $("html,body").animate({scrollTop: $("form[name='userInfoForm']").offset().top - 115}, 1000);
    });
});