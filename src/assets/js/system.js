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
        var _header = $('#home-header');
        var gotop = $('.gotop');
        var parent = $('.filter_search');


        $(window).scroll(function () {
            if ($(window).scrollTop() > 630) {
                _header.addClass('active');
                gotop.fadeIn();
            } else {
                _header.removeClass('active');
                gotop.fadeOut();
                parent.slideUp('fast');
            }

        });
    })();


    //项目详情
    //取消右边距
    $('.detail .products .list li:last-child, .detail .influence .column3 li:last-child').css('margin-right', '0');


    //返回顶部
    $('.gotop').click(function () {
        $("html,body").animate({scrollTop: 0}, 500);
    });


    //详情页
    (function () {
        var _detail = $('.detail123');
        var shareEl = _detail.find('a.share');  //分享
        var praiseEl = _detail.find('a.praise');  //点赞
        var shareBox = _detail.find('.share_box');  //分享谈框


        shareEl.on('click', function () {
            var _this = $(this);
            if (!_this.hasClass('active')) {
                _this.addClass('active');
                shareBox.fadeIn(100);
            } else {
                _this.removeClass('active');
                shareBox.fadeOut(100);
            }

            return false;
        });

        praiseEl.on('click', function () {
            var _this = $(this);
            if (!_this.hasClass('active')) {
                _this.addClass('active');
            } else {
                _this.removeClass('active');
            }
            return false;
        })


    })();


    //搜索筛选
    (function () {
        var searchIcon = $('.header .content .info li.search');
        var parent = $('.filter_search');
        var allEl = parent.find('.attr span');  //筛选项
        var itemEl = parent.find('.item');  //


        searchIcon.on('click', function () {
            parent.slideDown('fast');
            return false;
        });

        allEl.on('click', function () {
            var _this = $(this);
            var _index = _this.index();

            itemEl.eq(_index).show().siblings('.item').hide();
            itemEl.eq(_index).css('left', parseInt(_this.position().left) + 'px');


        });


    })();


    //非遗名录下拉
    (function () {
        var _header = $('.header');
        var _directory = $('#directory');

        var _menu = $('.drop_menu');
        var _item = _menu.find('.item');


        //非遗目录hover
        _directory.hover(function () {
            _menu.slideDown('fast');
        });

        _header.mouseleave(function () {
            _menu.slideUp();
        })

        //去掉dd的左边距
        _item.each(function () {
            var _dd = $(this).find('dd');
            _dd.eq(0).css('margin-left', '0');
        });


    })();

});





