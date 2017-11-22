function showPic(whichpic) {
    var source = whichpic.getAttribute("href");                  //路径存入变量source中
    var placeholder = document.getElementById("placeholder");    //获取占位图片
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}
/*
function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert (body_element.childNodes.length);
}
*/

/*
function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert (body_element.nodeType);
}
window.onload = countBodyChildren;
*/