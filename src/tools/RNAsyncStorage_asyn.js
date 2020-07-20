// 处理Storage的sync


let aaa = require('./RNAsyncStorage');
let storage = aaa.storage;

async = {
    // sync方法的名字必须和所存数据的key完全相同
    // 方法接受的参数为一整个object，所有参数从object中解构取出
    // 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject。
    user(params){

        console.log('-----> RNAsyncStorage async');
        storage.save({
          key: 'loginState', // 注意:请不要在key中使用_下划线符号!
          data: {
            from: 'some other site',
            userid: 'some userid',
            token: 'some token',
          },

          // 如果不指定过期时间，则会使用defaultExpires参数
          // 如果设为null，则永不过期
          expires: 1000 * 3600,
        });
    }
};

exports.async = async;
