/**
 * Created by wanp on 2015/12/22.
 */
var Page = {
    result: {},
    pageNumber: {},
    pageSize: {},
    totalPage: {},
    totalRow: {},
    preEvent: function (e, scope) {
        var newStartPage = $(e).data("cur_page") - 1;
        var callback = $(e).data("callback");
        var id = $(e).data("id");
        scope.$apply(window);
    },

    nextEvent: function (e, scope) {
        var newStartPage = $(e).data("cur_page") + 1;
        var callback = $(e).data("callback");
        var id = $(e).data("id");
        scope.$apply(window);
    },

    clickEvent: function (e, scope) {
        var newStartPage = $(e).data("cur_page");
        if (newStartPage == "...") {
            return;
        }
        var id = $(e).data("id");
        scope.$apply(window);
    },

    initPage: function (vm, $scope, page, callback, domId) {
        if ($("#" + domId) && $("#" + domId).length > 0) {
            domId = domId;
        } else {
            domId = "pageinfo";
        }
        this.result[domId] = page.list;
        this.pageNumber[domId] = page.pageNumber;
        this.pageSize[domId] = page.pageSize;
        this.totalPage[domId] = page.total;
        this.totalRow[domId] = page.totalRow;
        this.pageSize[domId] = page.pageSize;
        if (!vm.pageSize) {
            vm.pageSize = {};
        }
        vm.pageSize[domId] = page.pageSize;
        vm.html = this.render(domId, callback);
        vm.scope = $scope;
        vm.clickEvent = this.clickEvent;
        vm.preEvent = this.preEvent;
        vm.nextEvent = this.nextEvent;
        $("#" + domId).replaceWith(vm.html);
    },

    render: function (domId, callback) {
        var val = this.totalPage[domId] - this.pageNumber[domId];
        var num = [];
        if (this.totalPage[domId] > 6) {
            num[0] = 1;
            if (val >= 3 && this.pageNumber[domId] > 3) {
                num[1] = "...";
                num[2] = this.pageNumber[domId] - 1;
                num[3] = this.pageNumber[domId];
                num[4] = this.pageNumber[domId] + 1;
                num[5] = "...";
                num[6] = this.totalPage[domId];
            } else if (val >= 3 && this.pageNumber[domId] <= 3) {
                num[1] = 2;
                num[2] = 3;
                num[3] = 4;
                num[4] = "...";
                num[5] = this.totalPage[domId];
            } else if (val < 3 && this.pageNumber[domId] > 3) {
                num[1] = "...";
                num[2] = this.pageNumber[domId] - 1;
                num[3] = this.pageNumber[domId];
                if (val > 1) {
                    num[4] = this.pageNumber[domId] + 1;
                    num[5] = this.totalPage[domId];
                } else if (val == 1) {
                    num[4] = this.totalPage[domId];
                }
            }
        } else {
            for (var i = 0; i < this.totalPage[domId]; i++) {
                num[i] = i + 1;
            }
        }
        var html = "<div id=\"" + domId + "\" class=\"am-cf\">共 " + this.totalRow[domId] + " 条记录 " +
            "<div style='float: right'> " +
            "<ul class=\"am-pagination\"> ";
        if (this.pageNumber[domId] > 1) {
            html += "<li><a data-id=\"" + domId + "\" data-callback=\"" + callback + "\" data-cur_page=\"" + this.pageNumber[domId] + "\"  href=\"" + callback +"?start_page="+ (this.pageNumber[domId]-1)+ "\">&laquo;</a></li> ";
        } else {
            html += "<li class=\"am-disabled\"><a href=\"javascript:scroll(0,0)\">&laquo;</a></li> ";
        }
        for (var i = 0; i < num.length; i++) {
            if (num[i] == this.pageNumber[domId]) {
                html += "<li class=\"am-active\"><a data-id=\"" + domId + "\"  data-callback=\"" + callback + "\" data-cur_page=\"" + num[i] + "\"  href=\"" + callback +"?start_page="+ num[i]+ "\">" + num[i] + "</a></li> ";
            } else {
                html += "<li><a data-id=\"" + domId + "\"  data-callback=\"" + callback + "\"  data-cur_page=\"" + num[i] + "\" href=\"" + callback +"?start_page="+ num[i]+ "\">" + num[i] + "</a></li> ";
            }
        }
        if (this.pageNumber[domId] < this.totalPage[domId]) {
            html += "<li><a data-id=\"" + domId + "\"  data-callback=\"" + callback + "\" data-cur_page=\"" + this.pageNumber[domId] + "\" href=\"" + callback +"?start_page="+ (parseInt(this.pageNumber[domId])+1)+ "\">&raquo;</a></li> ";
        } else {
            html += "<li class=\"am-disabled\"><a href=\"javascript:scroll(0,0)\">&raquo;</a></li> ";
        }
        html += "</ul> </div> </div>";
        return html;
    }

}