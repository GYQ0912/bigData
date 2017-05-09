var common = {//公共js
    init:function () {
        header.init();
        this.top();
        this.input();
    },
    top: function () {//返回顶部
        $('.gotop').click(function () {
            $("html,body").animate({scrollTop: 0}, 500);
        });
    },
    input: function () {
        //输入框特效
        var _form = $('.form');
        var _input = _form.find('input.ipt');
        _input.each(function () {
            var _this = $(this);

            //初始化val值
            var oldVal = _this.val();

            //获取焦点
            _this.focus(function () {
                // clearInterval(timer);
                $(this).val('');
            });

            //失去焦点
            _this.blur(function () {
                // clearInterval(timer);

                var newVal = $(this).val();
                if (newVal == '') {
                    $(this).val(oldVal);
                }

                // timer = setInterval(slider, speed);
            });

        });
    },

};

var header = {//导航相关
    init: function () {
        this.filter();  //搜索下拉
        this.dropMenu();  //非遗名录下拉
    },
    filter: function () {
        var _header = $('.header');
        var search = _header.find('li.search');   //搜索图标
        var filter = $('.filter_search');   //下拉搜索
        var filterAll = filter.find('.attr span');  //筛选项
        var filterItem = filter.find('.item');      //筛选下来框

        //1.导航上的搜索图标
        search.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            filter.slideDown('fast');
        });

        //2.点击筛选
        filterAll.on('click', function () {
            var _this = $(this);
            var _index = _this.index();
            filterItem.eq(_index)
                .css('left', parseInt(_this.position().left) + 'px')
                .show()
                .siblings('.item')
                .hide();
        });

        //3.阻止点击自身关闭
        filter.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        //4.点击自身之外的地方关闭下拉框
        $(document).on("click", function () {
            filter.slideUp('fast');
        });

    },
    dropMenu: function () {//非遗名录下拉
        var drop = $('.drop_menu');
        var item = drop.find('.item');
        var _header = $('.header');
        var _houer = _header.find('.nav a').eq(1);

        _houer.hover(function () {
            var _height = _header.outerHeight(true);
            drop.css('top', _height + 'px').slideDown('fast');
        });

        _header.mouseleave(function () {
            drop.slideUp();
        });


        //去掉dd的左边距
        item.eq(0).css('width', '82px');
        item.eq(1).css('width', '143px');
        item.eq(2).css('width', '100px');
        item.eq(3).css('width', '240px');

        item.eq(3).find('a:even').css('width', '72px');
        item.eq(3).find('a:odd').css({'width': '129px', 'margin-left': '24px'});

        item.eq(4).css('width', '210px');
        item.eq(4).find('a:even').css('width', '115px');
        item.eq(4).find('a:odd').css({'width': '66px', 'margin-left': '24px'});

    },
};

var homePage = {
    init: function () {
        this.slide(); //轮播图
        // this.input();  //输入框
        this.scroll();  //滑动导航
    },
    slide: function () {//轮播图
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


    },
    scroll: function () {//滚动
        var _header = $('#home-header');
        var _top = $('.gotop');
        var _filter = $('.filter_search');

        $(window).scroll(function () {
            if ($(window).scrollTop() > 630) {
                _header.addClass('active');
                _top.fadeIn();
            } else {
                _header.removeClass('active');
                _top.fadeOut();
                _filter.slideUp('fast');
            }
        });
    }
};

$(function () {
    homePage.init();
    header.init();
    common.init();
});




