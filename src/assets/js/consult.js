(function () {
	var page = {
		controller: function(){
			page.bind();
		},
		bind: function(){
			var li_p = document.querySelectorAll(".context p");
			for(var i = 0; i < li_p.length; i++){
				var wordsNum = li_p[i].innerHTML.length;
				// 超出140字显示省略号
				if(wordsNum > 140){
					li_p[i].className = "text_overflow";
				}
			}
		}
	}
	page.controller();
})()