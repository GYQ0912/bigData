(function () {
	var page = {
		controller: function(){
			page.bind();
			page.init();
		},
		init: function(){
			//整屏适配
			//获取相关值
			var clientWidth = null; //浏览器宽度
			var clientHeight = null; //浏览器高度

			if(window.innerWidth){
				clientWidth = window.innerWidth;
			}else if ((document.body) && (document.body.clientWidth)){
				clientWidth = document.body.clientWidth;
			}else if( document.documentElement.clientWidth ){
				clientWidth = document.documentElement.clientWidth;
			}else{
				return ;
			}

			//固定最小宽度
			if(clientWidth < 1200){
				clientWidth = 1200;
			}

			if(window.innerHeight){
				clientHeight = window.innerHeight;
			}else if( (document.body) && (document.body.clientHeight) ){
				clientHeight = document.body.clientHeight;
			}else if( document.documentElement.clientHeight ){
				clientHeight = document.documentElement.clientHeight;
			}else{
				return ;
			}

			var navHeight = document.querySelector(".header").offsetHeight; //导航高度
			var footerHeight = document.querySelector(".footer").offsetHeight; //底部高度

			var ul_height = clientHeight - navHeight; //图片总高度
			var li_height = (ul_height / 4) < 150 ? 150 : (ul_height / 4); //单个li的高度,最小宽度为150px;
			var rbox_width = (clientWidth - (li_height * 5) - 47) < 408 ? 408 : (clientWidth - (li_height * 5) - 47); //文字介绍区域的宽度,最小宽度定为408px
			var rbox_left = li_height * 5; //文字介绍区域离左边的偏移值
			var rbox_H1_marginTop = li_height / 9; //文字介绍区域 名字的上边距
			var rbox_context_marginTop = li_height / 3.8; //文字介绍区域 文字介绍内容上边距

			//设置未点击时默认文字区域的宽度 及间距
			document.querySelector(".mainContainer > .rbox").style.cssText = "width:" + rbox_width + "px; left:" + rbox_left + "px;";
			document.querySelector(".mainContainer > .rbox > h1").style.marginTop = rbox_H1_marginTop + "px";
			document.querySelector(".mainContainer > .rbox > .context").style.marginTop = rbox_context_marginTop + "px";

			//设置图片总内容的高度
			document.querySelector("#masterList").style.height = ul_height + "px";
			var lis = document.querySelectorAll("#masterList li");
			for(var i = 0; i < lis.length; i++){
				//设置图片区域的宽高
				lis[i].style.width = 
				lis[i].style.height = 
				lis[i].querySelector(".lbox").style.width = 
				lis[i].querySelector(".lbox").style.height =
				lis[i].querySelector(".master_desc").style.width = li_height + "px";


				//设置对应文字介绍区域的宽度及间距
				lis[i].querySelector(".rbox").style.cssText = "width:" + rbox_width + "px;left:" + rbox_left + "px;";
				lis[i].querySelector(".rbox > h1").style.marginTop = 
				lis[i].querySelector(".rbox > .category").style.marginTop = rbox_H1_marginTop + "px";
				lis[i].querySelector(".rbox > .context").style.marginTop = rbox_context_marginTop + "px";
			}
			if(lis.length > 0){
				document.querySelector("#masterList").style.width = Math.ceil(li_height * 5) + "px";
			}
		},

		bind: function(){
			//图片选中
			var lis = document.querySelectorAll("#masterList li");
			for(var i = 0; i < lis.length; i++){
				//点击选中
				lis[i].onclick = function(){
					page.selectMaster(this);
				}
			}

			//窗口变化
			window.onresize = function(){
				page.init();
			}
		},

		//点击选中
		selectMaster: function(element){
			var lis = document.querySelectorAll("#masterList li");
			for(var i = 0; i < lis.length; i++){
				lis[i].className = "";
			}
			element.className = "active";
		}
	}
	page.controller();
})()