(function () {
	var page = {
		controller: function(){
			page.bind();
			page.init();
		},

		init: function(){
			//导航
			
		},

		bind: function(){
			var load_more = document.querySelectorAll(".load_more");
			for(var i = 0; i < load_more.length; i++){
				load_more[i].addEventListener("click", function(){
					page.loadMore(this);
				}, false);
			}
		},

		//Load More
		loadMore: function(element){
			var classify = element.getAttribute("data-classify");

			element.innerHTML = "Loading...";
			var timer = setTimeout(function(){
				var list = document.querySelector("."+classify).innerHTML;
				console.log(list);
				list += list;
				document.querySelector("."+classify).innerHTML = list;
				element.innerHTML = "Load More";
			},3000);
		}
	}
	page.controller();
})()