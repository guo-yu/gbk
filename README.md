## GBK ![npm](https://badge.fury.io/js/gbk.png)

Convert gbk to utf-8 made easy.

### Installation

```bash
$ npm install gbk
```

### Example

High level methods: 

```javascript
var gbk = require('gbk');

// fetch a gbk-encoded html page and save it
gbk
  .fetch('http://abc.com/gbk.html')
  .to('./demoGbk.html');

// fetch a gbk-encoded html page and save it and do sth in the callback
gbk
  .fetch('http://doabc.com/gbk.html')
  .to('./demoGbk.html', function(err, dist) {
    if (!err) 
      // do sth when it has been saved(gbk-encoded)
});

// fetch a gbk-encoded html page and get a utf-8 string
gbk
  .fetch('http://abc.com/gbk.html')
  .to('string', function(err,string){
    if (!err) 
      // do sth width utf-8 encoded string
});
```
Low level methods: from gbkBuffer

e.g: `request({url: 'xxx.gbk.html', encoding:null })` will callback with a buffer

```javascript
// got an uft-8 string:
var utf8String = gbk.toString('utf-8', gbkBuffer);

// make another GBK buffer:
var anotherGbkBuffer = gbk.toBuffer('gbk', utf8String);

// save a buffer
fs.writeFile('xxx.html',anotherGbkBuffer,function(err){
  if (err) 
    return throw err;

  console.log('original gbk file saved!')
});
```
### Run example

```bash
$ git clone https://github.com/turingou/gbk.git && cd gbk
$ node ./demo/demo.js
```

### API
Check this file: `index.js`

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 turing &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.1.2