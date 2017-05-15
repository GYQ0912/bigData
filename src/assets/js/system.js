var renderHhtml = {
    init: function () {
        this.header();
        this.footer();
    },
    header: function () {//导航
        var htmlStr = `<div class="content">
            <a class="logo" href=""></a>
            <div class="nav">
                <a class="active" href="">首页</a>
                <a href="">非遗名录</a>
                <a href="">非遗大师</a>
                <a href="">精选内容</a>
                <a href="">非遗咨询</a>
                <a href="">关于我们</a>
                <a href="">我要申报</a>
            </div>

            <div class="info">
                <ul>
                    <li class="login"><a class="active" href=""><i class="icon"></i><em>登录</em></a></li>
                    <li class="language">
                        <a class="zh active" href=""><em>中文</em></a>
                        <a class="en" href=""><em>EN</em></a>
                    </li>
                    <li class="search">
                        <i class="icon"></i>
                    </li>
                </ul>
            </div>
        </div>`;
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


//官方服务
var officialPage = {
    init: function () {

    }
};


//公共
var common = {
    init:function () {
      this.marginRight();
    },
    marginRight: function () {
        $('.directory .section li:nth-child(3n)').css('margin-right', 0);
    }
};


$(function () {
    renderHhtml.init();

    common.init();


    //作品详情页
    detailProduct.init();
});




