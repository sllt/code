$(function () {
        var ui_pic = $(".ui-pic");
        var ui_btn = $(".ui-btn");
        var li_btn = ui_btn.find("li");
        var li_pic = $(".ui-pic").find("li");
        var h = ui_pic.find("li").eq(0).height();
        var n = 1;
        var timer;
        li_btn.eq(0).addClass("on");
        li_pic.slice(0, 1).clone().appendTo(ui_pic);
        startGo();
        li_btn.mouseover(function () {
            var index = li_btn.index(this);
            go(index);
            n = index;
        });
        li_btn.hover(stopGo, startGo);

        function go(i) {
            ui_pic.stop().animate({ "top": -h * i }, 2000, function () { if (n == 3) ui_pic.css("top", 0); });
            li_btn.eq(i % 5).addClass("on").siblings().removeClass("on");
        }

        function startGo() {
            timer = setInterval(function () {
                if (n >= 3) {
                    n = 0;
                }

                go(n);
                n++;
            }, 5000);
        }
        function stopGo() {
            clearInterval(timer);
        }
    });