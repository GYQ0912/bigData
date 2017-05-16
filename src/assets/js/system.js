var renderHhtml = {
    init: function () {
        this.header();
        this.footer();
    },
    header: function () {//导航
        var htmlStr = `<div class="content">
            <a class="logo" href=""></a>
            <div class="nav">
                <ul>
                    <li class="active"><a href="http://localhost:3000/首页.html">首页</a></li>
                    <li><a href="http://localhost:3000/非遗名录.html">非遗名录</a></li>
                    <li><a href="http://localhost:3000/非遗大师.html">非遗大师</a></li>
                    <li><a href="http://localhost:3000/精选内容.html">精选内容</a></li>
                    <li><a href="http://localhost:3000/非遗资讯.html">非遗资讯</a></li>
                    <li><a href="http://localhost:3000/官方服务.html">官方服务</a></li>
                    <li><a href="http://localhost:3000/我要申报.html">我要申报</a></li>
                </ul>
            </div>
            <div class="info">
                <ul>
                    <li class="login"><a class="active" href="javascript:;"><i class="icon"></i><em>登录</em></a></li>
                    <li class="language">
                        <a class="zh active" href="javascript:;"><em>中文</em></a>
                        <a class="en" href="javascript:;"><em>EN</em></a>
                    </li>
                    <li class="search">
                        <i class="icon"></i>
                    </li>
                </ul>
            </div>
        </div>
        <!--//End content-->
        <div class="drop_menu">
            <div class="content">
                <div class="item">
                    <dl>
                        <dt>口头传说和表述</dt>
                        <dd>
                            <a href="">语言</a>
                            <a href="">文字</a>
                            <a href="">口述</a>
                            <a href="">其他口头传统<br>及表述</a>
                        </dd>
                    </dl>
                </div>
                <!--//End-->

                <div class="item">
                    <dl>
                        <dt>表演艺术</dt>
                        <dd>
                            <a href="">音乐演奏</a>
                            <a href="">舞蹈</a>
                            <a href="">民歌</a>
                            <a href="">传统戏剧</a>
                            <a href="">曲艺</a>
                            <a href="">传统体育、游艺与杂技</a>
                            <a href="">其他表演艺术</a>
                        </dd>
                    </dl>
                </div>
                <!--//End-->

                <div class="item">
                    <dl>
                        <dt>社会风俗<br>礼仪、节庆</dt>
                        <dd>
                            <a href="">生产商贸习俗</a>
                            <a href="">生活习俗</a>
                            <a href="">人生仪式</a>
                            <a href="">节日庆典</a>
                            <a href="">其他仪式及庆典</a>
                        </dd>
                    </dl>
                </div>
                <!--//End-->

                <div class="item">
                    <dl>
                        <dt>有关自然界和<br>宇宙的知识和实践</dt>
                        <dd>
                            <a href="">农林牧畜渔</a>
                            <a href="">服装</a>
                            <a href="">食品</a>
                            <a href="">住房与建筑</a>
                            <a href="">交通</a>
                            <a href="">旅行</a>
                            <!--</dd>-->
                            <!--<dd>-->
                            <a href="">医、药</a>
                            <a href="">军事防御</a>
                            <a href="">商贸</a>
                            <a href="">工业、工程</a>
                            <a href="">天文、地理、水文等</a>
                            <a href="">其他自然知识和实践</a>
                        </dd>
                    </dl>
                </div>
                <!--//End-->

                <div class="item">
                    <dl>
                        <dt>传统的手工艺技能</dt>
                        <dd>
                            <a href="">工具及机械制作</a>
                            <a href="">髹饰工艺</a>
                            <a href="">家畜农林产品加工</a>
                            <a href="">织染工艺</a>
                            <a href="">造纸、印刷机装裱</a>
                            <a href="">编扎工艺</a>
                            <a href="">字画工艺</a>
                            <a href="">锻冶工艺</a>
                            <a href="">剪刻工艺</a>

                            <a href="">雕塑工艺</a>
                            <a href="">烧造工艺</a>
                            <a href="">木作工艺</a>
                            <a href="">其他类</a>


                        </dd>
                    </dl>
                </div>


            </div>
        </div>
        <!--//End drop_menu-->
        
        `;
        this.base('.header', htmlStr);
    },
    footer: function () {//底部
        var htmlStr = `<div class="diich">
            <p class="name">非遺國際 DIICH</p>
            <p class="subname">2017 © FeiYi. All rights<br> reserved</p>
        </div>
        <div class="msg mese">Mese Selimovica, 52<br>78000, Banja Luka BiH</div>
        <div class="msg phone">+387 065 252 552<br>email@example.com</div>
        <div class="share">
            <a href="" class="facebook" title="facebook"></a>
            <a href="" class="twitter" title="twitter"></a>
            <a href="" class="instagram" title="instagram"></a>
            <a href="" class="linkedin" title="linkedin"></a>
        </div>`;
        this.base('.footer', htmlStr);
    },
    base: function (obj, html) {
        var _el = $(obj);
        _el.html(html);
    }
};


//公共
var common = {
    init: function () {
        this.marginRight();
        this.input();

        header.init();
    },
    marginRight: function () {
        $('.directory .section li:nth-child(3n)').css('margin-right', 0);
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


//导航部分
var header = {
    init: function () {
        this.scroll();
        this.search();
        this.drop();

        this.bind();
    },
    bind: function () {//点击状态
        $('.header .content .info li.login').on('click', function () {
            header.loginLayer();
            return false;
        });
    },
    scroll: function () {//页面滚动导航悬浮
        var _header = $('#home-header');
        var _top = $('.gotop');
        var _filter = $('.filter_search');

        if (_header) {
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

    },
    drop: function () {//非遗名录下拉
        var drop = $('.drop_menu');
        var item = drop.find('.item');
        var _header = $('.header');
        var _houer = _header.find('.nav li').eq(1);
        var timer = null;
        var speed = 200;


        _houer.hover(function () {
            clearInterval(timer);
            var _height = _header.outerHeight(true);
            drop.css('top', _height + 'px').slideDown('fast');
        }, function () {
            timer = setInterval(function () {
                drop.slideUp();
            }, speed);
        });


        drop.hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(function () {
                drop.slideUp();
            }, speed);
        });


        //去掉dd的左边距
        item.eq(0).css('width', '86px');
        item.eq(1).css('width', '143px');
        item.eq(2).css('width', '100px');
        item.eq(3).css('width', '240px');

        item.eq(3).find('a:even').css('width', '72px');
        item.eq(3).find('a:odd').css({'width': '129px', 'margin-left': '24px'});

        item.eq(4).css('width', '210px');
        item.eq(4).find('a:even').css('width', '115px');
        item.eq(4).find('a:odd').css({'width': '66px', 'margin-left': '24px'});
    },
    search: function () {
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
    loginLayer: function () {//登录弹出框
        var _layer = $('.box_layer');
        var _speed = 300;

        //弹出框显示
        _layer.animate({'top': '50%'}, _speed);
        $('body').append('<div class="overbg"></div>');

        //弹出框隐藏
        $('.overbg').on('click', function () {
            _layer.animate({'top': '-50%'}, _speed);
            $(this).remove();
        })
    }
};


//首页
var homePage = {
    init: function () {
        this.slide(); //轮播图
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
        this.doiCode();
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


    },
    doiCode: function () {
        $('.doi_code').hover(function () {
            $(this).find('.drop').fadeIn();
        }, function () {
            $(this).find('.drop').fadeOut();
        })
    }
};


//作品详情页
var detailProduct = {
    init: function () {
        this.thumb();
        this.simple();
    },
    thumb: function () {
        var media = $('.media_box');
        var _ul = media.find('ul');
        var _li = _ul.find('li');
        var _liWidth = _li.outerWidth(true);
        var _liLen = _li.length;
        var _ulWidth = _liLen * _liWidth;


        _ul.css('width', _ulWidth + 'px');

        _li.on('click', function () {
            $(this).addClass('active').siblings('li').removeClass('active')
        });
    },
    simple: function () {
        $('.card .plain_text li:last-child').css('margin-right', 0);
    }
};


//登录注册
var loginPage = {
    init: function () {
        //去除表单最后一组的下边距
        $('.form_area .group:last-child').css('margin-bottom', 0);

        this.code();
    },
    code: function () {//验证码
        var _form = $('.form_area');
        var _span = _form.find('.code span');
        var _oldSpan = _span.text();
        var time = 60;


        _span.on('click', function () {
            var _this = $(this);

            if (!_this.hasClass('active')) {
                _this.addClass('active').text(time + 's后重新发送');
                var timer = setInterval(function () {
                    time--;
                    _this.text(time + 's后重新发送');

                    if (time == 0) {
                        clearInterval(timer);
                        time = 60;
                        _this.removeClass('active').text(_oldSpan);
                    }
                }, 1000);
            }


        });


    }

};


//取消css
var cancelCss = {
    marginRight: function (obj) {
        $(obj).css('margin-right', 0);
    }
};


var masterPage = {
    init: function () {
        this.getScreen();
        this.selectMaster();
        $(window).resize(function () {
            masterPage.getScreen();
        })
    },
    getScreen: function () {//获取浏览器分辨率
        var headerHeight = $('.header').outerHeight(true); //导航高度
        var clientWidth = $(window).width();  //浏览器宽度
        var clientHeight = $(window).height();  //浏览器宽度
        var mainHeight = clientHeight - headerHeight;//内容的高度


        var lbox = $('.lbox');
        var rbox = $('.rbox');
        var rboxDefaultContextP = rbox.find('.default .context p');
        var li = lbox.find('li');
        var liHeight = parseInt(mainHeight / 4) < 150 ? 150 : parseInt(mainHeight / 4);  //单个li的高度,最小宽度为150px;

        var lboxWidth = liHeight * 5;   //左侧宽度
        var rboxWidth = clientWidth - lboxWidth;  //右侧宽度

        if (clientWidth < 1200) {
            clientWidth = 1200;
        }


        //左侧
        lbox.css('width', lboxWidth + 'px');  //左侧赋值
        li.css({'width': liHeight + 'px', 'height': liHeight + 'px'});

        //右侧
        rbox.css({'width': rboxWidth + 'px', 'height': mainHeight + 'px'});

        if (mainHeight <= 700) {
            mainHeight = 700;
            rboxDefaultContextP.css('height', '100px');
            $('.master_page .rbox .more').css('bottom', '110px')
        } else {
            rboxDefaultContextP.css('height', '');
            $('.master_page .rbox .more').css('bottom', '110px')
        }


    },
    selectMaster: function () {//选中大师
        var _li = $('.master_avatar li');
        _li.on('click', function () {
            $(this).addClass('active').siblings('li').removeClass('active');
        });
    }

};


$(function () {
    renderHhtml.init();

    common.init();

    homePage.init();

    detailPage.init();

    //作品详情页
    detailProduct.init();

    loginPage.init();


    masterPage.init();
});




