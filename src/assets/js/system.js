var renderHhtml = {
    init: function() {
        this.header();
        this.footer();
        this.filter();
    },
    header: function() { //导航
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
    footer: function() { //底部
        var htmlStr = `<div class="diich">
        <div class="hd">
            <p class="name"><span>DIICH</span><em>非遺國際</em></p>
            <p class="subname">2017 © EFeiYi. All rights reserved</p>
        </div>
    </div>
    <!--//End diich-->
    <div class="main">
        <div class="hd">
            <div class="lbox">
                <div><span>项目概况</span><em>tel：400-876-8766</em></div>
                <div><span>重大活动</span><em>email：efeiyi@efeiyi.com</em></div>
                <div><span>合作资源</span><em>地址：北京市东城区前门大街72&74号二层</em></div>
                <div><span>业务体系</span><em>add：2Floor，72&74,Qian Men ST.Dongcheng District,Beijing,China</em></div>
            </div>
            <!--//End lbox-->
            <div class="rbox">
                <div class="share">
                    <a href="" class="facebook" title="facebook"></a>
                    <a href="" class="twitter" title="twitter"></a>
                    <a href="" class="instagram" title="instagram"></a>
                    <a href="" class="linkedin" title="linkedin"></a>
                    <span class="code"><img src="assets/images/footer_code.png" alt=""></span>
                </div>
            </div>
        </div>
    </div>
    <!--//ENd main-->`;
        this.base('.footer', htmlStr);
    },
    filter: function() {
        var htmlStr = `<div class="content">
        <form class="form" action="">
            <input class="ipt" type="text" value="从这里搜索您感兴趣的...">
            <input class="submit" type="submit" value="搜索">
            <div class="suggest" style="display: block;">
                <ul>
                    <li><a href=""><span>苏州</span>传承人</a></li>
                    <li><a href=""><span>苏州</span>苏绣</a></li>
                    <li><a href=""><span>苏州</span>苏绣</a></li>
                    <li><a href=""><span>苏州</span>苏绣</a></li>
                    <li><a href=""><span>苏州</span>苏绣</a></li>
                    <li><a href=""><span>苏州</span>苏绣</a></li>
                    <li><a href=""><span>苏州</span>苏绣</a></li>
                    <li><a href=""><span>苏州</span>苏绣</a></li>
                    <li><a href=""><span>苏州</span>苏绣</a></li>
                </ul>
            </div>
        </form>
        <!--//End form-->

        <div class="attr">
            <span>所属类别</span>
            <span>全球</span>
        </div>
        <!--//End attribute-->

        <div class="dropbox" id="drag">
            <div class="item">
                <dl class="level">
                    <dt>
                    <div class="title">一级分类</div>
                    <div class="subtitle">所有分类</div>
                    </dt>
                    <dd>
                        <ul>
                            <li>口头传统和表述</li>
                            <li>表演艺术</li>
                            <li>社会风俗、礼仪、节庆</li>
                            <li>有关自然界和宇宙的知识和实践</li>
                            <li>传统的手工艺技能</li>
                            <li>传统的手工艺技能</li>
                            <li>传统的手工艺技能</li>
                            <li>传统的手工艺技能</li>
                            <li>传统的手工艺技能</li>
                            <li>传统的手工艺技能</li>
                        </ul>
                    </dd>
                </dl>
                <dl class="level2">
                    <dt>
                    <div class="title">二级分类</div>
                    <div class="subtitle">所有二级分类</div>
                    </dt>
                    <dd>
                        <ul>
                            <li>工具和机械制作</li>
                            <li>家畜农林产品加工</li>
                            <li>造纸、印刷及装裱</li>
                            <li>烧造工艺</li>
                            <li>锻冶工艺</li>
                            <li>雕塑工艺</li>
                            <li>雕塑工艺</li>
                            <li>雕塑工艺</li>
                            <li>雕塑工艺</li>
                            <li>雕塑工艺</li>
                        </ul>
                    </dd>
                </dl>
            </div>
            <!--//End 所属分类-->
            <div class="item">
                <dl class="level">
                    <dt>
                    <div class="title">位置</div>
                    </dt>
                    <dd>
                        <ul>
                            <li>全球</li>
                            <li>中国</li>
                            <li>非洲</li>
                            <li>阿拉伯地区</li>
                            <li>亚太</li>
                            <li>欧美</li>
                            <li>拉美</li>
                        </ul>
                    </dd>
                </dl>
                <dl class="level2">
                    <dt>
                    <div class="title">按照字母顺序</div>
                    </dt>
                    <dd>
                        <ul>
                            <li>安微</li>
                            <li>澳门</li>
                            <li>北京</li>
                            <li>上海</li>
                            <li>福建</li>
                            <li>甘肃</li>
                            <li>广东</li>
                        </ul>
                    </dd>
                </dl>
            </div>
            <!--//End 位置-->
        </div>
        <!--//End attribute-->
    </div>`;
        this.base('.filter_search', htmlStr);
    },
    base: function(obj, html) {
        var _el = $(obj);
        _el.html(html);
    }
};

//工具
var utils = {
    getStr: function(str) { //计算长度 汉字是2
        var real = 0;
        var len = str.length;
        var charCode = -1;
        for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) {
                real += 1;
            } else {
                real += 2;
            }
        }
        return real;
    },
};

//公共
var common = {
    init: function() {
        this.input();
        this.top();
        header.init();
    },
    top: function() { //返回顶部
        $('.gotop').click(function() {
            $("html,body").animate({ scrollTop: 0 }, 500);
        });
    },
    input: function() {
        //输入框特效
        var _form = $('.form');
        var _input = _form.find('input.ipt');
        _input.each(function() {
            var _this = $(this);

            //初始化val值
            var oldVal = _this.val();

            //获取焦点
            _this.focus(function() {
                // clearInterval(timer);
                $(this).val('');
            });

            //失去焦点
            _this.blur(function() {
                // clearInterval(timer);

                var newVal = $(this).val();
                if (newVal == '') {
                    $(this).val(oldVal);
                }

                // timer = setInterval(slider, speed);
            });

        });
    },
    pad: function(num, length) { //个位数补零
        if (!length) {
            length = 10;
        }
        return ("0" + num).substr(-length);
    },
    slide: function() { //轮播图
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

        numLi.mousedown(function() {
            clearInterval(timer);
            cur = $(this).index();
            $(this).addClass('active').siblings('li').removeClass('active');
            imgLi.eq(cur).stop(true).fadeIn().siblings('li').fadeOut();
            textP.eq(cur).stop(true).fadeIn().siblings('p').fadeOut();
        });

        numLi.mouseup(function() {
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
            imgLi.eq(cur).stop(true).fadeIn().siblings('li').fadeOut();
            textP.eq(cur).stop(true).fadeIn().siblings('p').fadeOut();
        }


    }
};

//导航部分
var header = {
    init: function() {
        this.scroll();
        this.search();
        this.drop();
        this.bind();
        loginPage.init();
    },
    bind: function() { //点击状态
        $('.header .content .info li.login').on('click', function() {
            header.loginLayer();
            return false;
        });
    },
    scroll: function() { //页面滚动导航悬浮
        var _header = $('#home-header');
        var _top = $('.gotop');
        var _filter = $('.filter_search_fixed');

        if (_header) {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 630) {
                    _header.addClass('active');
                    _top.css('opacity', '1');
                } else {
                    _header.removeClass('active');
                    _top.css('opacity', '0');
                    _filter.slideUp('fast');
                }
            });
        }

    },
    drop: function() { //非遗名录 二级导航
        var drop = $('.drop_menu');
        var item = drop.find('.item');
        var _header = $('.header');
        var _houer = _header.find('.nav li').eq(1);
        var timer = null;
        var speed = 200;


        _houer.hover(function() {
            clearInterval(timer);
            var _height = _header.outerHeight(true);
            drop.css('top', _height + 'px').slideDown('fast');
        }, function() {
            timer = setInterval(function() {
                drop.slideUp();
            }, speed);
        });

        drop.hover(function() {
            clearInterval(timer);
        }, function() {
            timer = setInterval(function() {
                drop.slideUp();
            }, speed);
        });


        //去掉dd的左边距
        item.eq(0).css('width', '86px');
        item.eq(1).css('width', '143px');
        item.eq(2).css('width', '100px');
        item.eq(3).css('width', '240px');

        item.eq(3).find('a:even').css('width', '72px');
        item.eq(3).find('a:odd').css({ 'width': '129px', 'margin-left': '24px' });

        item.eq(4).css('width', '210px');
        item.eq(4).find('a:even').css('width', '115px');
        item.eq(4).find('a:odd').css({ 'width': '66px', 'margin-left': '24px' });
    },
    search: function() {
        var _header = $('.header');
        var search = _header.find('li.search'); //搜索图标
        var filter = $('.filter_search'); //下拉搜索
        var filterFixed = $('.filter_search_fixed');
        var filterAll = filter.find('.attr span'); //筛选项
        var filterItem = filter.find('.item'); //筛选下来框
        var suggest = filter.find('.suggest');
        var body = $('body');

        //1.导航上的搜索图标
        search.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            filter.css('top', _header.outerHeight(true) + 'px').slideDown('fast');
        });

        //2.点击筛选
        filterAll.on('click', function() {
            var _this = $(this);
            var _index = _this.index();
            filterItem.eq(_index)
                .css('left', parseInt(_this.position().left) + 'px')
                .show()
                .siblings('.item')
                .hide();
        });

        //3.阻止点击自身关闭
        filter.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });

        //4.点击自身之外的地方关闭下拉框
        $(document).on("click", function() {
            filterItem.hide();
            filterFixed.slideUp('fast');
        });

        //自动提示
        if (suggest.is(':visible')) {
            body.css('overflow', 'hidden');
            body.append('<div class="overbg"></div>');
        } else {
            body.css('overflow', '');
        }

        body.find('.overbg').on('click', function() {
            filterItem.hide();
            filterFixed.slideUp('fast');
            suggest.hide();
            $(this).remove();
            body.css('overflow', '');
        });

    },
    loginLayer: function() { //登录弹出框
        var _layer = $('.box_layer');
        var _speed = 300;

        //弹出框显示
        _layer.show().animate({ 'top': '50%' }, _speed);
        $('body').append('<div class="overbg"></div>');

        //弹出框隐藏
        $('.overbg').on('click', function() {
            _layer.animate({ 'top': '-50%' }, _speed);
            $(this).remove();
        })
    }
};

//首页 ok
var homePage = {
    init: function() {
        common.slide(); //轮播图
    },
};

//传承人详情页 ok
var detaiInheritorlPage = {
    init: function() {
        var _detail = $('.detail');
        widget.share(_detail); //分享
        widget.praise(_detail); //点赞
        widget.doiCode(); //doi二维码
        detailCommon.productsTab(); //产品分页tab
        detailCommon.scrollFloor(); //楼层导航效果
        detailCommon.mainBg();
    }
};

//项目详情页 ok
var projectPage = {
    init: function() {
        var _detail = $('.detail');
        this.setAttr();
        this.masterMore();
        widget.share(_detail); //分享
        widget.praise(_detail); //点赞
        widget.doiCode(); //doi二维码
        detailCommon.productsTab(); //产品分页tab
        detailCommon.scrollFloor(); //楼层导航效果
        detailCommon.mainBg();
        detailCommon.cutText();
    },
    setAttr: function() {
        //设置文本内容为三列
        textHandle.set('.plain_text');
    },
    masterMore:function () {
        var master=$('.card_main .inheritor .master');
        var oldHeight=master.height()-50;
        var ul = master.find('ul');
        var li = ul.find('li');
        var totalItem = ul.find('.item');
        var item = li.find('.item');
        var liLen=li.length;
        var page = master.find('.page');

        var prev = master.find('.prev');
        var next = master.find('.next');
        var more = master.find('.more');

        var cur=0;

        //初始化
        li.hide();
        li.eq(0).show();


        if(item.length<=3){
            more.hide();
        }
        more.find('em').html(totalItem.length-3);  //其他多少人

        //查看其它
        more.on('click',function () {
            ul.addClass('active').animate({'height':oldHeight+'px'},100);
            $(this).hide();
            li.show();
            prev.show();
            next.show();
            page.show();
            li.find('.item:gt(0)').show();
            if(liLen<2){
                prev.hide();
                next.hide();
            }
        });

        //判断li的个数
        prev.hide();
        next.hide();

        ul.animate({'height':'70px'},100);
        page.hide();
        prev.hide();
        next.hide();

        li.find('.item:gt(2)').hide();
        if(liLen>2){
            for (var i = 0;i<liLen;i++) {
                page.append('<span>' + common.pad(i + 1) + '</span>')
            }
        }

        var _span=page.find('span');
        _span.eq(0).addClass('active');
        _span.on('click',function () {
            cur=$(this).index();
            $(this).addClass('active').siblings('span').removeClass('active');
            ul.stop(true).animate({'margin-left':-cur*li.outerWidth(true)+'px'},300);

            if(cur==0){
                prev.addClass('active');
            }else {
                prev.removeClass('active');
            }
            if(cur==liLen-1){
                next.addClass('active');
            }else {
                next.removeClass('active');
            }

        });
        prev.addClass('active');
        //下一页
        next.on('click',function () {
            prev.removeClass('active');
            if(cur<liLen-1){
                cur++;
            }
            _span.eq(cur).addClass('active').siblings('span').removeClass('active');
            ul.stop(true).animate({'margin-left':-cur*li.outerWidth(true)+'px'},300);
            console.log(cur)
        });
        //上一页
        prev.on('click',function () {
            next.removeClass('active');
            if(cur > 0){
                cur--;
            }
            if(cur==0){
                $(this).addClass('active');
            }
            _span.eq(cur).addClass('active').siblings('span').removeClass('active');
            ul.stop(true).animate({'margin-left':-cur*li.outerWidth(true)+'px'},300);
        });
        if(cur==liLen-1){
            next.addClass('active');
        }
        if(cur==0){
            prev.addClass('active')
        }
    }
};

//作品详情页 ok
var detailProductPage = {
    init: function() {
        $('.card .plain_text li:last-child').css('margin-right', 0);
        this.thumbTab();
        detailCommon.scrollFloor();
        widget.doiCode();
        this.paly();
    },
    thumbTab: function() { //视频相册轮播
        var parent = $('.media_box');
        var item = parent.find('.pic .item'); //主内容
        var _play = item.find('.play_big');
        var prev = parent.find('.prev'); //上一页
        var next = parent.find('.next'); //下一页
        var num = parent.find('.num');
        var em = num.find('em');

        var _ul = parent.find('.thumb ul'); //缩略图父级
        var _li = _ul.find('li'); //缩略图li
        var _liWidth = _li.outerWidth(true); //缩略图占用的宽度
        var _liLen = _li.length; //缩略图数量
        var _ulWidth = _liLen * _liWidth; //动态计算缩略图父级宽度
        var cur = 0; //设置初始值


        //1.初始化状态
        _ul.css('width', _ulWidth + 'px'); //给缩略图父级动态添加宽度
        item.eq(0).show(); //显示主内容第一个
        _li.eq(0).addClass('active'); //缩略图第一个加激活状态
        em.eq(0).text(common.pad(cur + 1));
        em.eq(2).text(common.pad(_liLen));
        //如果数量小于等于6个就隐藏
        if (_liLen <= 6) {
            prev.hide();
            next.hide();
        }

        //点击缩略图
        _li.on('click', function() {
            cur = $(this).index();
            item.eq(cur).show().siblings('.item').hide();
            $(this).addClass('active').siblings('li').removeClass('active');
            em.eq(0).text(common.pad(cur + 1));

            var type= $(this).attr('data-type');
            videoPlay(type, cur);
        });

        //2.点击下一页
        next.on('click', function() {
            if (cur < _liLen - 1) {
                cur++;
                if (cur > 4 && cur < _liLen - 1) {
                    _ul.animate({ 'margin-left': -(cur - 4) * _liWidth + 'px' }, 300)
                }
            }
            item.eq(cur).show().siblings('.item').hide();
            _li.eq(cur).addClass('active').siblings('li').removeClass('active');
            em.eq(0).text(common.pad(cur + 1));
        });

        //3.点击上一页
        prev.on('click', function() {
            if (cur > 0) {
                cur--;
                if (cur > 4 && cur < _liLen - 1) {
                    _ul.animate({ 'margin-left': -(cur - 5) * _liWidth + 'px' }, 300)
                }
            }
            item.eq(cur).show().siblings('.item').hide();
            _li.eq(cur).addClass('active').siblings('li').removeClass('active');
            em.eq(0).text(common.pad(cur + 1));

        });

        //视频播放
        function videoPlay(type, val) {
            var video=item.find('video').get(0);
            if(video){
                video.pause();
                if(video.paused){
                    _play.show();
                }
            }
        }

    },
    paly:function () {
        var play=$('.play_big');
        var video= play.siblings('video');
        play.on('click',function () {
            $(this).hide();
            video.get(0).play();
            video.attr('controls','controls')
        });
    }
};

//大师页面 ok
var masterPage = {
    init: function() {
        this.getScreen();
        this.selectMaster();
        $(window).resize(function() {
            masterPage.getScreen();
        })
    },
    getScreen: function() { //获取浏览器分辨率
        var headerHeight = $('.header').outerHeight(true); //导航高度
        var clientWidth = $(window).width(); //浏览器宽度
        var clientHeight = $(window).height(); //浏览器宽度
        var mainHeight = clientHeight - headerHeight; //内容的高度

        var parent=$('.master_page');
        var lbox = parent.find('.lbox');
        var rbox = parent.find('.rbox');
        var rboxDefaultContextP = rbox.find('.context p');
        var li = lbox.find('li');
        var liHeight = parseInt(mainHeight / 4) < 150 ? 150 : parseInt(mainHeight / 4); //单个li的高度,最小宽度为150px;

        var lboxWidth = liHeight * 5; //左侧宽度
        var lboxHeight = liHeight * 4; //左侧高度
        var rboxWidth = clientWidth - lboxWidth; //右侧宽度

        if (clientWidth < 1200) {
            clientWidth = 1200;
        }


        //左侧
        lbox.css('width', lboxWidth + 'px'); //左侧赋值
        li.css({ 'width': liHeight + 'px', 'height': liHeight + 'px' });

        //右侧
        rbox.css({ 'width': rboxWidth + 'px', 'height': lboxHeight + 'px' });

        if (mainHeight <= 760) {
            rboxDefaultContextP.css('height', '70px');
            $('.master_page .rbox .more').css('bottom', '110px')
        } else {
            rboxDefaultContextP.css('height', '');
            $('.master_page .rbox .more').css('bottom', '110px')
        }


    },
    selectMaster: function() { //选中大师
        var _li = $('.master_avatar li');
        var _default = $('.master_page .rbox .default');
        var _item = $('.master_page .rbox .item');
        var _h1 = $('.master_page .rbox .item .title h1');
        var _oldText = _h1.text();


        _li.on('click', function() {
            var index = $(this).index();
            _default.hide();
            _item.show();
            $(this).addClass('active').siblings('li').removeClass('active');
            _h1.text(_oldText + index);
        });
    }
};

//非遗名录 && 搜索结果页
var searchPage = {
    init: function() {
        $('.header_detail .content .info li.search').hide();
        $('.header_detail .content .info li.login').addClass('line');
        // $('.directory .section li:nth-child(2n+1)').css('margin-right', '0');
        this.filterBar();
    },
    filterBar: function() {
        var obj = $('.filter_bar');
        var linkTab = obj.find('a');
        var iconTab = obj.find('.icon_tab');
        var proColumn = $('.pro_column3'); //搜索列表

        //筛选
        linkTab.on('click', function() {
            $(this).addClass('active').siblings('a').removeClass('active');
            return false;
        });

        //切换图标
        iconTab.on('click', function() {
            if ($(this).hasClass('active')) { //九宫格
                $(this).removeClass('active');
                proColumn.removeClass('active');
            } else { //横排
                $(this).addClass('active');
                proColumn.addClass('active');
            }
        });


    }
};

//精选页面
var wonderfulPage = {
    init: function() {
        common.slide(); //轮播图
    }
};


//登录注册
var loginPage = {
    init: function() {
        //去除表单最后一组的下边距
        $('.form_area .group:last-child').css('margin-bottom', 0);

        this.code();
    },
    code: function() { //验证码
        this.html();

        var _form = $('.form_area');
        var _span = _form.find('.code span');
        var _oldSpan = _span.text();
        var time = 60;
        _span.on('click', function() {
            var _this = $(this);

            if (!_this.hasClass('active')) {
                _this.addClass('active').text(time + 's后重新发送');
                var timer = setInterval(function() {
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

    },
    html: function() {
        var str = `<div class="box_layer">
                            <form class="form_area" action="">
                                <div class="title">登录</div>
                                <div class="group">
                                    <div class="name"><em>*</em><span>昵称</span></div>
                                    <div class="area">
                                        <input class="ipt" type="text" value="请输入昵称">
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="name"><em>*</em><span>密码</span></div>
                                    <div class="area">
                                        <input class="ipt" type="text" value="请输入密码">
                                        <a class="forget" href="">忘记登录密码</a>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="name">&nbsp;</div>
                                    <div class="area">
                                        <input class="btn" type="submit" value="登录">
                                        <a class="arrow_right" href="">暂无账号，去注册</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!--//End 登录弹层-->`;
        $('body').append(str);
    }

};

//文本处理相关
var textHandle = {
    getLength: function(str) { //获取字符串长度   汉字是2
        var real = 0;
        var len = str.length;
        var charCode = -1;
        for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) {
                real += 1;
            } else {
                real += 2;
            }
        }
        return real;
    },
    set: function(el) {
        var _this = this; //存储当前this
        var obj = $(el); //获取目标元素
        obj.each(function() {
            var _text = $(this).text(); //目标元素的内容
            var _len = _this.getLength(_text) / 2; //计算目标元素内容的长度
            if (_len >= 200 && _len <= 1200) {
                $(this).addClass('column3');
            }
        })
    }
};

//小组件
var widget = {
    share: function(obj) { //分享
        obj.each(function() {
            var _share = $(this).find('a.share');
            var _shareBox = $(this).find('.share_box');
            //弹出框
            _share.on('click', function() {
                _shareBox.stop(true).fadeToggle();
                return false;
            });

            _shareBox.on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
            });

            $(document).on("click", function() {
                _shareBox.fadeOut();
            });
        });
    },
    praise: function(obj) { //点赞功能
        var praise = obj.find('.praise');
        praise.on('click', function() {
            var _this = $(this);

            //创建动画数字
            if (_this.hasClass('active')) { //取消点赞
                _this.removeClass('active');
                _this.append('<div class="add"><b>-1</b></div>');
                animateNum('.add');
            } else { //点赞
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
                }, 'slow', function() {
                    $(this).fadeIn('fast').remove();
                });
            }

        });

    },
    doiCode: function() { //doi鼠标滑过显示二维码
        $('.doi_code').hover(function() {
            $(this).find('.drop').stop(true).fadeToggle(true);
        });
    }
};

//详情页相关
var detailCommon = { //详情页用到的效果
    productsTab: function() { //作品分页
        var _products = $('.product_list');
        _products.each(function() {
            //列表相关属性
            var _ul = _products.find('ul'); //获取列表ul
            var _li = _ul.find('li'); //获取列表li
            var liLen = _li.length; //获取列表的length

            //分页相关属性
            var _page = _products.find('.page'); //分页显示容器
            var currentNum = 4; //当前页显示个数
            var total = Math.ceil(liLen / currentNum); //分页总数

            //创建分页数码
            if (total > 1) {
                for (var i = 1; i <= total; i++) {
                    _page.append('<span>0' + i + '</span>');
                }
                var _pageSpan = _page.find('span');
                _pageSpan.eq(0).addClass('active');

                //计算列表滚动
                _pageSpan.on('click', function() {
                    var index = $(this).index();
                    _ul.animate({ 'margin-left': -index * 1170 + 'px' }, 300);
                    $(this).addClass('active').siblings('span').removeClass('active');
                });
            }
        });
    },
    mediaShow: function(type, index) { //浮层弹出
        if (type === '0') {
            this.mediaTab(type, index);
        } else {
            this.mediaTab(type, index);
        }
    },
    mediaTab: function(type, index) { //相册和视频切换  type:0位相册,1为视频
        var mediaLayer = $('.media_layer');
        var head = mediaLayer.find('.head');
        var close = head.find('a.icon_close');
        var span = head.find('span');
        var items = mediaLayer.find('.items');
        var album = mediaLayer.find('.album');
        var albumLi = album.find('.media li');
        var albumNum = album.find('.num');
        var video = mediaLayer.find('.video');
        var videoLi = video.find('.media li');

        //
        if (!mediaLayer.hasClass('active')) {
            firstShow(type, index);
            albumNum.each(function() {
                $(this).find('.active').text(common.pad(1));
                $(this).find('.total').text(common.pad(albumLi.length));
            });
        } else {
            afterShow(type, index);
        }

        //点击
        span.on('click', function() {
            var _type = $(this).index();
            headTab(_type);
            videoPlay();
            if(_type==1) {
                videoPlay(1);
            }
        });

        //第一次展开
        function firstShow(type, index) {
            mediaLayer.fadeIn('fast');
            span.eq(type).addClass('active').siblings('span').removeClass('active');
            items.eq(type).show().siblings('.items').hide();
            if (type == 0) { //显示相册
                mediaAlbum(1);
                mediaVideo(1);
            } else { //显示视频
                mediaVideo(1);
                mediaAlbum(1);
            }
        }

        function afterShow(type, index) {
            mediaLayer.fadeIn('fast');
            span.eq(type).addClass('active').siblings('span').removeClass('active');
            items.eq(type).show().siblings('.items').hide();
            if (type == 0) { //显示相册
                mediaAlbum(index);
            } else { //显示视频
                mediaVideo(index);
            }
        }

        // //head
        function headTab(type0) {
            span.eq(type0).addClass('active').siblings('span').removeClass('active');
            items.eq(type0).show().siblings('.items').hide();
        }

        //相册
        function mediaAlbum(val) {
            var cur = parseInt(val) - 1;
            var title = album.find('.title .dt li');
            var li = album.find('.media li');
            var liLen = li.length;
            var num = album.find('.num'); //角标

            var prev = album.find('.prev');
            var next = album.find('.next');

            if (liLen == 1) {
                prev.hide();
                next.hide();
            }

            li.eq(cur).show().siblings('li').hide();
            title.eq(cur).show().siblings('li').hide();
            num.each(function() {
                $(this).find('.active').text(common.pad(cur + 1));
                $(this).find('.total').text(common.pad(liLen));
            });

            //下一页
            next.on('click', function() {
                prev.removeClass('active');
                if (cur < liLen - 1) {
                    cur++;
                }
                if (cur == liLen - 1) {
                    $(this).addClass('active');
                }
                title.eq(cur).show().siblings('li').hide();
                num.find('.active').text(common.pad(cur + 1));
                li.eq(cur).show().siblings('li').hide();
            });

            //上一页
            prev.on('click', function() {
                next.removeClass('active');
                if (cur > 0) {
                    cur--;
                }
                if (cur == 0) {
                    $(this).addClass('active');
                }
                title.eq(cur).show().siblings('li').hide();
                num.find('.active').text(common.pad(cur + 1));
                li.eq(cur).show().siblings('li').hide();
            });


        }

        //视频
        function mediaVideo(val) {
            var cur = parseInt(val);
            var title = video.find('.title .dt li');
            var li = video.find('.media li');
            var liLen = li.length;

            var numLi = video.find('.num li'); //角标

            var prev = video.find('.prev');
            var next = video.find('.next');

            if (liLen == 1) {
                prev.hide();
                next.hide();
            }

            if(cur==0){
                prev.addClass('active');
            }
            if(cur==liLen-1){
               next.addClass('active');
            }

            videoPlay(val);
            li.eq(cur).show().siblings('li').hide();
            title.eq(cur).show().siblings('li').hide();
            numLi.eq(cur).addClass('active').siblings('li').removeClass('active');

            //下一页
            next.on('click', function() {
                prev.removeClass('active');
                if (cur < liLen - 1) {
                    cur++;
                }
                if (cur === liLen - 1) {
                    $(this).addClass('active');
                }
                title.eq(cur).show().siblings('li').hide();
                numLi.eq(cur).addClass('active').siblings('li').removeClass('active');
                li.eq(cur).show().siblings('li').hide();

                videoPlay(cur);

            });

            //上一页
            prev.on('click', function() {
                next.removeClass('active');
                if (cur > 0) {
                    cur--;
                }
                if (cur === 0) {
                    $(this).addClass('active');
                }
                videoPlay(cur);
                title.eq(cur).show().siblings('li').hide();
                numLi.eq(cur).addClass('active').siblings('li').removeClass('active');
                li.eq(cur).show().siblings('li').hide();
            });

            //角标点击效果
            numLi.on('click', function() {
                cur = $(this).index();
                videoPlay(cur);
                $(this).addClass('active').siblings('li').removeClass('active');
                title.eq(cur).show().siblings('li').hide();
                li.eq(cur).show().siblings('li').hide();

                if (cur == 0) {
                    prev.addClass('active');
                }
                if (cur == liLen - 1) {
                    next.addClass('active');
                }
            });

        }

        //视频播放暂停
        function videoPlay(val) {
            videoLi.each(function () {
                $(this).find('video').get(0).pause();
                if(val || $(this).index()==val){
                    $(this).find('video').get(0).play();
                }
            });

        }

        //关闭浮层
        close.on('click', function() {
            mediaLayer.addClass('active').fadeOut('fast');
            videoPlay();
            return false;
        });

    },
    mainBg: function() { //首屏图片 视频
        var _img = $('.mainbg img');
        var imgW = _img.width();
        var imgH = _img.height();

        _img.css({
            'margin-top': -parseInt(imgH / 2) + 'px',
            'margin-left': -parseInt(imgW / 2) + 'px',
        });

    },
    cutText: function() { //截取长文本 大于3000
        var lgText = $('div[data-type=lgText]');
        var textMore = $('.text_more');
        var _span = textMore.find('span');
        var oldH = lgText.height();
        var newH = 600; //基本高度
        if (lgText.height() >= newH) {
            lgText.animate({ 'height': newH + 'px' }, 0);
        }
        _span.eq(1).hide();
        _span.on('click', function() {
            var _this = $(this);
            if (_this.hasClass('show')) {
                lgText.animate({ 'height': oldH + 'px' }, 100);
                setTimeout(function() {
                    _this.hide().siblings('span').show();
                }, 100);
            } else {
                lgText.animate({ 'height': newH + 'px' }, 100);
                setTimeout(function() {
                    _this.hide().siblings('span').show();
                }, 100);
            }
        })

    },
    scrollFloor: function() { //楼层
        var parent = $('.side_fixed')
        var _ul = parent.find('ul'); //导航
        var _floor = $('section.floor'); //楼层
        var _nav = $('.card header h4'); //楼层标题
        var arr = []; //把pros对应的几个位置标示出来

        //获取所有楼层标题
        _nav.each(function(i) { //给右侧悬浮添加标题
            _ul.append('<li><span>' + $(this).text() + '</span><strong>0' + (i + 1) + '</strong></li>');
        });
        var _li = _ul.find('li');

        //滚动
        _floor.each(function() { //标记所有楼层导航的高度
            var offsettop = $(this).offset().top;
            arr.push(parseInt(offsettop)); //火狐有半个像素的情况，故取整
        });

        var firstFloor = arr[0];
        //滚动鼠标
        $(window).scroll(function() {
            var d = $(document).scrollTop();

            if (d > firstFloor - 20) {
                parent.fadeIn('fast');
                for (var i = 0; i < arr.length; i++) {
                    if (d < arr[i]) {
                        break;
                    }
                }
                _li.removeClass('active');
                if (i > 0) {
                    _li.eq(i - 1).addClass('active').siblings('li').removeClass('active');
                }

                if (i == arr.length) {
                    i--;
                }
            } else {
                parent.fadeOut('fast');
            }


        });

        //点击回到当前楼层
        _ul.on('click', 'li', function() {
            var _index = $(this).index();
            var _top = _floor.eq(_index).offset().top;
            $(this).addClass('active').siblings('li').removeClass('active');
            $('html,body').stop(true).animate({ 'scrollTop': _top + 'px' }, 500);
        });
    },
};


$(function() {
    renderHhtml.init();
    common.init();

    $('.play_big,.play,.albums').on('click', function() {
        var type = $(this).attr('data-type');
        var index = parseInt($(this).attr('data-id'));
        detailCommon.mediaShow(type, index);
    })
});