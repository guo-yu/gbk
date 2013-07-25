# GBK ![](https://badge.fury.io/js/gbk.png)

gbk <-> utf-8 made easy

````javascript
var gbk = require('gbk');

// from some gbkBuffer
// e.g: request({url: 'xxx.gbk.html',encoding:null }) will callback with a buffer
gbk(gbkBuffer,function(string){
    // got an uft-8 string
    // do sth with string
    // e.g: string = string + '!!!helloGBK!!!';
    var anotherGbkBuffer = gbk.buffer(string);
    // save a buffer
    fs.writeFile('xxx.html',anotherGbkBuffer,function(err){
        if (err) throw err;
        console.log('file saved!')
    })
});
````