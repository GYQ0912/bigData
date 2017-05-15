var common = {//公共js
    init: function () {
        header.init();
        this.top();
        this.input();
        this.suggest();
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
    suggest: function () {
        var obj = $('.suggest');
        if (obj.is(':visible')) {
            $('body').append('<div class="overbg"></div>');
        } else {
            $('.overbg').remove();
        }
    }
};


var search = {

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

    }
};

//首页
var homePage = {
    init: function () {
        this.slide(); //轮播图
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
                _top.fadeIn().css('display', 'block');
            } else {
                _header.removeClass('active');
                _top.fadeOut();
                _filter.slideUp('fast');
            }
        });
    }
};

//详情页
var detailPage = {
    init: function () {
        //去除影响li右边距
        cancelCss.marginRight('.detail .plain_text li:last-child');
        $('.detail .card .master_avatar li:nth-child(3n)').css('margin-right', 0);

        this.pageTab();
        this.share();
        this.praise();
        this.specific();
        this.scroll();
    },
    share: function () {//分享
        var _detail = $('.detail');
        var share = _detail.find('a.share');
        var shareBox = _detail.find('.share_box');

        //弹出框
        share.on('click', function () {
            shareBox.stop(true).fadeToggle();
            return false;
        });

        shareBox.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        $(document).on("click", function () {
            shareBox.fadeOut();
        });


    },
    praise: function () {//点赞功能
        var _detail = $('.detail');
        var praise = _detail.find('.praise');

        praise.on('click', function () {
            var _this = $(this);

            //创建动画数字
            if (_this.hasClass('active')) {//取消点赞
                _this.removeClass('active');
                _this.append('<div class="add"><b>-1</b></div>');
                animateNum('.add');
            } else {//点赞
                _this.addClass('active');
                _this.append('<div class="add"><b>+1</b></div>');
                animateNum('.add');

            }

            function animateNum(obj) {
                $(obj).css({
                    'position': 'absolute',
                    'z-index': '1',
                    'color': '#C30',
                    'left': '5px',
                    'top': '-15px',
                }).animate({
                    left: 15,
                    top: -30
                }, 'slow', function () {
                    $(this).fadeIn('fast').remove();
                });
            }
        });

    },
    pageTab: function () {//代表性作品
        var _products = $('.product_list');

        //列表相关属性
        var _ul = _products.find('ul');  //获取列表ul
        var _li = _ul.find('li');  //获取列表li
        var liLen = _li.length;   //获取列表的length

        //分页相关属性
        var _page = _products.find('.page');  //分页显示容器
        var currentNum = 4;      //当前页显示个数
        var total = Math.ceil(liLen / currentNum);  //分页总数

        //创建分页数码
        if (total > 1) {
            for (var i = 1; i <= total; i++) {
                _page.append('<span>0' + i + '</span>');
            }
            var _pageSpan = _page.find('span');
            _pageSpan.eq(0).addClass('active');

            //计算列表滚动
            _pageSpan.on('click', function () {
                var index = $(this).index();
                _ul.animate({'margin-left': -index * 1170 + 'px'}, 300);
                $(this).addClass('active').siblings('span').removeClass('active');
            });
        }


    },
    specific: function () {//doi鼠标滑过
        $('.detail .project .content .code').hover(function () {
            $(this).find('.drop').fadeToggle(true);
        });
    },
    scroll: function () {//楼层
        var aNav = $('.side_fixed li');  //导航
        var aDiv = $('section.floor');   //楼层
        if (aDiv.length == 1) {
            var f0 = aDiv.eq(0).offset().top;
        }
        if (aDiv.length == 2) {
            var f1 = aDiv.eq(1).offset().top;
        }
        if (aDiv.length == 3) {
            var f2 = aDiv.eq(2).offset().top;
        }
        if (aDiv.length == 4) {
            var f3 = aDiv.eq(3).offset().top;
        }
        if (aDiv.length == 5) {
            var f4 = aDiv.eq(4).offset().top;
        }
        if (aDiv.length == 6) {
            var f5 = aDiv.eq(5).offset().top;
        }
        if (aDiv.length == 7) {
            var f6 = aDiv.eq(6).offset().top;
        }
        if (aDiv.length == 8) {
            var f7 = aDiv.eq(7).offset().top;
        }
        if (aDiv.length == 9) {
            var f8 = aDiv.eq(8).offset().top;
        }

        //滚动
        $(window).scroll(function () {
            var tt = $(window).scrollTop();


            if (tt > f0) {
                aNav.eq(0).addClass('active').siblings('li').removeClass('active');
            }
            if (tt > f1) {
                aNav.eq(1).addClass('active').siblings('li').removeClass('active');
            }
            if (tt > f2) {
                aNav.eq(2).addClass('active').siblings('li').removeClass('active');
            }
            if (tt > f3) {
                aNav.eq(3).addClass('active').siblings('li').removeClass('active');
            }
            if (tt > f4) {
                aNav.eq(4).addClass('active').siblings('li').removeClass('active');
            }
            if (tt > f5) {
                aNav.eq(5).addClass('active').siblings('li').removeClass('active');
            }
            if (tt > f6) {
                aNav.eq(6).addClass('active').siblings('li').removeClass('active');
            }
            if (tt > f7) {
                aNav.eq(7).addClass('active').siblings('li').removeClass('active');
            }
            if (tt > f8) {
                aNav.eq(8).addClass('active').siblings('li').removeClass('active');
            }

        });

        //点击回到当前楼层
        aNav.on('click', function () {
            var _index = $(this).index();
            var _top = aDiv.eq(_index).offset().top;

            $('html,body').animate({'scrollTop': _top + 'px'}, 500);
        });


    }
};

//非遗名录
var directory = {
    init: function () {
        $('.directory .section .pro_column3 li:nth-child(3n)').css('margin-right', 0);
        $('.directory .section ul.inheritor li:nth-child(3n)').css('margin-right', 0);
        $('.directory .section ul.product li:nth-child(3n)').css('margin-right', 0);
        this.loadMore();
    },
    loadMore: function () {
        $('.load_more a').on('click', function () {
            $(this).html('Loading...');
        })
    }
};

//非遗大师
//todo


//精彩资讯
var informationPage = {
    init: function () {
        //todo
    },
};


var cancelCss = {
    marginRight: function (obj) {
        $(obj).css('margin-right', 0);
    }
};




$(function () {
    common.init();
    header.init();
    homePage.init();

    detailPage.init();

    directory.init();

    informationPage.init();
});