var examplePage = {
    init: function () {
        this.mainBg();

        this.share();
        this.praise();
    },
    mainBg: function () {//首屏图片 视频
        var obj=$('.bg');
        var _img = obj.find('.main img');
        var imgW = _img.width();
        var imgH = _img.height();

        _img.css({
            'margin-top': -parseInt(imgH / 2) + 'px',
            'margin-left': -parseInt(imgW / 2) + 'px',
        });

    },
    share: function () { //分享
        var obj=$('.base .main .floor');

        obj.each(function () {
            var _share = $(this).find('a.share');
            var _shareBox = $(this).find('.share_box');
            //弹出框
            _share.on('click', function () {
                _shareBox.stop(true).fadeToggle();
                return false;
            });

            _shareBox.on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
            });

            $(document).on("click", function () {
                _shareBox.fadeOut();
            });
        });
    },
    praise: function () { //点赞功能
        var obj=$('.base .main .floor');
        var praise = obj.find('.praise');
        praise.on('click', function () {
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
                }, 'slow', function () {
                    $(this).fadeIn('fast').remove();
                });
            }

        });

    },
};