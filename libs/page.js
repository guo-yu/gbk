var fs = require('fs'),
    request = require('request'),
    gbk = require('../index'),
    utils = require('./utils');

var defaults = function(){};

var Page = function(url, charset) {
    this.url = url;
    this.charset = charset || 'utf-8';
}

Page.prototype.save = function(dist, body, callback) {
    return fs.writeFile(dist, body, function(err) {
        if (err) return callback(err);
        return callback(null, dist);
    });
}

Page.prototype.to = function(dist, callback) {
    var self = this;
    var cb = utils.isFunction(callback) ? callback : defaults;
    return request({
        url: self.url,
        encoding: null
    }, function(err, response, body) {
        if (err) return cb(err);
        if (response.statusCode != 200) return cb(new Error(response.statusCode));
        if (dist !== 'string') return self.save(dist, body, cb);
        // we've get gbk or utf-8 buffer
        // switch it to utf-8 string
        if (self.charset !== 'utf-8') return cb(new Error('encode not supported'));
        return cb(null, gbk.toString(self.charset, body));
    });
};

exports = module.exports = Page;