function prepareSlideshow() {
	// 确保浏览器知道dom方法
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	// 确保元素存在
	if (!document.getElementById("linklist")) return false;
	//if (!document.getElementById("preview")) return false;
	// 创建div盒子以及img元素
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id", "slideshow");
	var image = document.createElement("img");
	image.setAttribute("src", "./sylwia-bartyzel-114124.jpg");
	image.setAttribute("alt", "building blocks of web design");
	image.setAttribute("id", "preview");
	slideshow.appendChild(image);
	//photo.style.left = "0px";在moveElement函数中有安全措施！
	//photo.style.top = "0px";在moveElement函数中有安全措施！
	// 获得链表中的所有链接
	var list = document.getElementById("linklist");
	//插入id属性为slideshow的节点
	insertAfter(slideshow, list);
	var links = list.getElementsByTagName("a");
	// 为onmouseover事件添加动画效果
	links[0].onmouseover = function() {
		moveElement("preview", -100, 0, 10);
	}
	links[1].onmouseover = function() {
		moveElement("preview", -200, 0, 10);
	}
	links[2].onmouseover = function() {
		moveElement("preview", -300, 0, 10);
	}
}
addLoadEvent(prepareSlideshow);