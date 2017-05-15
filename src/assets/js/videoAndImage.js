(function(){
	//数据地址
	var data = {
		prevImageUrl: "assets/img/p2@2x.png",
		nextImageUrl: "assets/img/videopost.png", 
		prevVideoUrl: "assets/video/video2.mp4",
		nextVideoUrl: "assets/video/video.mp4"
	};
	var page = {
		controller: function () {
			page.bind();
		},
		bind: function(){
			//视频和图册菜单切换
			var lis = document.querySelectorAll("#menu li");
			for(var i = 0; i < lis.length; i++){
				lis[i].querySelector("a").onclick = function(){
					page.menuChange(this);
				}
			}

			//左右切换按钮
			var changeBtns = document.querySelectorAll(".changeBtn");
			for(var i = 0; i < changeBtns.length; i++){
				changeBtns[i].onclick = function(){
					page.change( this.getAttribute("data-source") );
				}
			}

			//关闭按钮
			document.querySelector(".icon_close").onclick = function(){
				document.querySelector(".preview_container").style.display = "none";
			}
		},

		//
		menuChange: function(element){
			var lis = document.querySelectorAll("#menu li");
			for(var i = 0; i < lis.length; i++){
				lis[i].className = "";
			}

			element.parentNode.className = "active";
			var type = element.getAttribute("data-type");
			if(type == "video"){
				document.querySelector(".image").style.display = "none";
				document.querySelector(".video").style.display = "block";

				document.querySelector(".changeBtn.prev").setAttribute("data-source", '{"type":"video","url":"' + data.prevVideoUrl + '"}');
				document.querySelector(".changeBtn.next").setAttribute("data-source", '{"type":"video","url":"' + data.nextVideoUrl + '"}');
			}else{
				document.querySelector(".image").style.display = "block";
				document.querySelector(".video").style.display = "none";

				document.querySelector(".changeBtn.prev").setAttribute("data-source", '{"type":"image","url":"' + data.prevImageUrl + '"}');
				document.querySelector(".changeBtn.next").setAttribute("data-source", '{"type":"image","url":"' + data.nextImageUrl + '"}');
			}
		},

		//点击左右按钮切换
		change: function(data){
			data = JSON.parse(data);
			var type = data.type;
			var url = data.url;

			//切换显示类型
			if( type == "image" ){
				document.querySelector(".image").style.display = "block";
				document.querySelector(".video").style.display = "none";

				document.querySelector(".image img").src = url;
				//缺少更新 data-source 的 url 值的方法，需要后台配合给url值,修改 data{} 变量中对应的值即可
			}else{
				document.querySelector(".image").style.display = "none";
				document.querySelector(".video").style.display = "block";

				document.querySelector(".video video").src = url;
				//缺少更新 data-source 的 url 值的方法，需要后台配合给url值,修改 data{} 变量中对应的值即可
			}
		}
	}
	page.controller();
})()