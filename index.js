var iconv = require('iconv-lite'),
    page = require('./libs/page');

// to utf-8 string
exports.toString = function(type, buff) {
    if (type !== 'utf-8') throw new Error('encode not supported');
    return iconv.decode(buff, 'GBK');
}

// to gbk buffer
exports.toBuffer = function(type, string) {
    if (type !== 'utf-8') throw new Error('encode not supported');
    return iconv.encode(string, 'GBK');
}

// fetch gbk page
exports.fetch = function(url, charset) {
    if (!url) throw new Error('url is not vaild');
    if (typeof(url) !== 'string') throw new Error('url is not vaild');
    if (!(url.indexOf('http') == 0 || url.indexOf('https') == 0)) throw new Error('url is not vaild');
    return new page(url, charset);
}
