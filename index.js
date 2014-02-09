var iconv = require('iconv-lite'),
    page = require('./libs/page');

var isFunction = function(func) {
    return func && typeof(func) === 'function';
}

// to utf-8 string
exports.toString = function(type, buff, callback) {
    if (type !== 'utf-8') return false;
    var s = iconv.decode(buff, 'GBK');
    if (isFunction(callback)) callback(s);
    return s;
}

// to gbk buffer
exports.toBuffer = function(type, string, callback) {
    if (type !== 'gbk') return false;
    var b = iconv.encode(string, 'GBK');
    if (isFunction(callback)) callback(b);
    return b;
}

// fetch gbk page
exports.fetch = function(url, charset) {
    if (!url) return false;
    if (typeof(url) !== 'string') return false;
    if (!(url.indexOf('http') == 0 || url.indexOf('https') == 0)) return false;
    return new page(url, charset);
}
