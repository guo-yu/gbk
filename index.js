var iconv = require('iconv-lite'),
    request = require('request'),
    fs = require('fs');

var _page = function(url, charset) {
    this.url = url;
    if (charset) {
        this.charset = charset;
    }
}

_page.prototype.save = function(dist, body, cb) {
    fs.writeFile(dist, body, function(err) {
        if (!err) {
            if (cb) {
                cb(null, dist)
            }
        } else {
            if (cb) {
                cb(err);
            }
        }
    });
}

_page.prototype.to = function(dist, cb) {
    var self = this;
    request({
        url: self.url,
        encoding: null
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            // we've get gbk or utf-8 buffer;
            if (dist == 'string') {
                if (self.charset && self.charset == 'utf-8') {
                    // switch it to utf-8 string;
                    var utf8String = exports.toString('utf-8', body);
                    cb(null,utf8String)
                };
            } else {
                self.save(dist,body,cb);
            }
        } else {
            if (cb) {
                cb(error);
            }
        }
    });
};

// to utf-8 string
exports.toString = function(type, buff, callback) {
    if (type == 'utf-8') {
        var s = iconv.decode(buff, 'GBK');
        if (callback && typeof(callback) == 'function') callback(s);
        return s;
    }
}

// to gbk buffer
exports.toBuffer = function(type, string, callback) {
    if (type == 'gbk') {
        var b = iconv.encode(string, 'GBK');
        if (callback && typeof(callback) == 'function') callback(b);
        return b;
    }
}

// fetch gbk page
exports.fetch = function(url, charset) {
    if (url && typeof(url) == 'string' && (url.indexOf('http') == 0 || url.indexOf('https') == 0)) {
        return new _page(url, charset);
    } else {
        return false;
    }
}