window.onload = prepareLinks;
function prepareLinks() {
    if (!document.getElementsByTagName) return false;    //检查浏览器是否理解这个方法
    var links = document.getElementsByTagName("a");      //把文档中的所有链接全都放在一个数组中
    for (var i=0; i<links.length; i++) {                 //遍历数组
        if (links[i].getAttribute("class") == "popup") { //如果某个链接的class属性等于popup，就表示这个链接在被点击时应调用                                                           popUp函数
            links[i].onclick = function() {
                popUp(this.getAttribute("href"));        //把这个链接的href属性值传递给popUp函数；
                return false;                            //取消这个链接的默认行为为，不让这个链接把访问者带离当前窗口。
            }
        }
    }
}
function popUp(winURL) {
    window.open(winURL, "popup", "width=320,height=480");
}
