var gbk = require('../index');

gbk.fetch('http://home.alipay.com/bank/paymentKJ.htm').to('string', function(err, string){
  if (err) 
    return console.log(err);

  console.log(string)

  return console.log('fetch done!');
});