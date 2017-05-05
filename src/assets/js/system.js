$(function () {
    //首屏轮播图
    (function () {
        var parent = $('.slider');
        var imgLi = parent.find('ul.img li');
        var imgLen = imgLi.length;
        var numLi = parent.find('ul.num li');
        var form = $('.form');
        var ipt = form.find('input.ipt');
        var textP = form.find('div.text p');

        var cur = 0;
        var speed = 5000;
        var timer = null;


        numLi.mousedown(function () {
            clearInterval(timer);
            cur = $(this).index();
            $(this).addClass('active').siblings('li').removeClass('active');
            imgLi.eq(cur).fadeIn().siblings('li').fadeOut();
            textP.eq(cur).fadeIn().siblings('p').fadeOut();
        });

        numLi.mouseup(function () {
            timer = setInterval(slider, speed);
        });

        //轮播
        timer = setInterval(slider, speed);


        function slider() {
            if (cur < imgLen - 1) {
                cur++;
            } else {
                cur = 0;
            }
            numLi.eq(cur).addClass('active').siblings('li').removeClass('active');
            imgLi.eq(cur).fadeIn().siblings('li').fadeOut();
            textP.eq(cur).fadeIn().siblings('p').fadeOut();
        }

        //搜索部分
        ipt.each(function () {
            var _this = $(this);

            //初始化val值
            var oldVal = _this.val();

            //获取焦点
            _this.focus(function () {
                clearInterval(timer);
                $(this).val('');
            });

            //失去焦点
            _this.blur(function () {
                clearInterval(timer);

                var newVal = $(this).val();
                if (newVal == '') {
                    $(this).val(oldVal);
                }

                timer = setInterval(slider, speed);
            });

        });


    })();
    //导航搜索
    (function () {
        var _header = $('#home-header')
        $(window).scroll(function () {
            if ($(window).scrollTop() > 810) {
                _header.addClass('home_header_fixed');
            } else {
                _header.removeClass('home_header_fixed');
            }

        });
    })();


    //项目详情
    //取消右边距
    $('.detail .products .list li:last-child, .detail .influence .column3 li:last-child').css('margin-right', '0');


});






