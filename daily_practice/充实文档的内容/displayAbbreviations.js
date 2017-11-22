function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement 
        || !document.createTextNode) return false;
    //取得所有缩略词
    var abbr = document.getElementsByTagName("abbr");
    if (abbr.length < 1) return false;
    var defs = new Array();
    //遍历这些缩略词
    for (var i = 0; i < abbr.length; i++) {
        var current_abbr = abbr[i];
        //如果当前元素没有子节点，就立刻开始下一次循环
        //IE浏览器在统计abbr元素的子节点个数时总会返回一个错误的值0，所以这条语句将会让IE浏览器不再执行循环中的后续代码
        if (current_abbr.childNodes.length < 1) continue;
        var definition = abbr[i].getAttribute("title");
        var key = abbr[i].lastChild.nodeValue;
        defs[key] = definition;
    }
    //创建定义列表
    var dlist = document.createElement("dl");
    //遍历定义
    for (key in defs) {
        var definition = defs[key];
        //创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //把它们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1) return false;
    //创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //把标题添加到页面主体
    document.body.appendChild(header);
    //把定义列表添加到页面主体
    document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);