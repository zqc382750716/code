// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    // 设置响应体
    response.send('HELLO AJAX')
});
// 可以接收热议类型的请求
app.all('/json-server',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Healders','*')
    // 响应一个数据
    const data = {
        name: 'atguigu'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str)
});
// 针对IE缓存
app.get('/ie',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    // 设置响应体
    response.send('HELLO IE')
});
app.all('/axios-server',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Healders','*')
    // 响应一个数据
    const data = {name: '尚硅谷'};
    // 设置响应体
    response.send(JSON.stringify(data));
});
app.all('/fetch-server',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Healders','*')
    // 响应一个数据
    const data = {name: '尚硅谷'};
    // 设置响应体
    response.send(JSON.stringify(data));
});
app.all('/jquery-jsonp-server',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Healders','*')
    // 响应一个数据
    const data = {
        name: '尚硅谷',
        city:['北京','上海','深圳']
    };
    // 设置响应体
    let str = JSON.stringify(data);
    // 接收callback参数
    let cb = request.query.callback;
    response.end(`$(cb)(${str})`);
});
// 延时响应
app.get('/delay',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(() => {
        response.send('延时响应')
    }, 3000);
});
// 4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务器已启动，8000 端口监听中....");
});