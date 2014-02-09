var fs = require('fs'),
    request = require('request');

var Page = function(url, charset) {
    this.url = url;
    if (charset) this.charset = charset;
}

Page.prototype.save = function(dist, body, callback) {
    return fs.writeFile(dist, body, function(err) {
        if (err) return callback(err);
        return callback(null, dist);
    });
}

Page.prototype.to = function(dist, callback) {
    var self = this;
    request({
        url: self.url,
        encoding: null
    }, function(err, response, body) {
        if (err) return callback(err);
        if (response.statusCode != 200) return callback(new Error(response.statusCode));
        if (dist !== 'string') return self.save(dist, body, callback);
        // we've get gbk or utf-8 buffer;
        if (self.charset && self.charset == 'utf-8') {
            // switch it to utf-8 string;
            return callback(null, exports.toString('utf-8', body));
        };
        return false;
    });
};

exports = module.exports = Page;