# GBK ![](https://badge.fury.io/js/gbk.png)

## GBK <--> utf-8 made easy

### How to install
```
$ npm install gbk
```

### Simple code

````javascript
var gbk = require('gbk');

// low level - from some gbkBuffer
// e.g: request({url: 'xxx.gbk.html',encoding:null }) will callback with a buffer
gbk.toString('utf-8',gbkBuffer,function(string){
    // got an uft-8 string
    // do sth with string
    // e.g: string = string + '!!!helloGBK!!!';
    var anotherGbkBuffer = gbk.toBuffer('gbk',string);
    // save a buffer
    fs.writeFile('xxx.html',anotherGbkBuffer,function(err){
        if (err) throw err;
        console.log('original gbk file saved!')
    })
});

// high level - fetch a gbk-encoded html page and save it
gbk.fetch('http://abc.com/gbk.html').to('./demoGbk.html');

// high level - fetch a gbk-encoded html page and save it and to sth in the callback
gbk.fetch('http://abc.com/gbk.html').to('./demoGbk.html',fucntion(err,dist){
    if (!err) {
        // to sth when it has been saved(gbk-encoded)
    }
});

// high level - fetch a gbk-encoded html page and got utf-8 string
gbk.fetch('http://abc.com/gbk.html','utf-8').to('string',fucntion(err,string){
    if (!err) {
        // to sth width utf-8 encoded string
    }
});
````