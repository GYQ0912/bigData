var examplePage = {
    init: function () {
        this.mainBg();
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
};