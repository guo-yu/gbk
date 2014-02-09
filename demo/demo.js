var gbk = require('../index');

gbk.fetch('http://home.alipay.com/bank/paymentKJ.htm','utf-8').to('string',function(err,string){
    console.log('ok');
});