window.onload = function() {
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
    alert(testdiv.innerHTML);
}

//innerHTML属性可以用来读，写某个给定元素里的HTML内容。
//这个技术无法区分“插入一段html内容”和“替换一段html内容”
//一旦使用innerHTML属性，它的全部内容都将被替换