function getHTTPObject() {
    if (typeof XMLHttpRequest =="undefined") {
        try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
            catch (e) {}
        try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
            catch (e) {}
        try { return new ActiceXObject("Msxml2.XMLHTTP"); }
            catch (e) {}
        return false;
    }
    return new XMLHttpRequest;
}

// getHTTPPbject 通过对象检测技术检测了XMLHttpRequest
// 如果失败，则继续检测其他方法，最终返回false或一个新的XMLHttpRequest（或XMLHTTP）对象