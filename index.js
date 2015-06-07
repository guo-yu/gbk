var iconv = require('iconv-lite');
var page = require('./libs/page');

exports.toString = toString
exports.toBuffer = toBuffer
exports.fetch = fetch

// to utf-8 string
function toString(type, buff) {
  if (type !== 'utf-8') 
    throw new Error('encode not supported');

  return iconv.decode(buff, 'GBK');
}

// to gbk buffer
function toBuffer(type, string) {
  if (type !== 'utf-8') 
    throw new Error('encode not supported');

  return iconv.encode(string, 'GBK');
}

// fetch gbk page
function fetch(url, charset) {
  if (!url || typeof(url) !== 'string') 
    throw new Error('url is not vaild');

  if (!(url.indexOf('http') == 0 || url.indexOf('https') == 0)) 
    throw new Error('url is not vaild');

  return new page(url, charset);
}
