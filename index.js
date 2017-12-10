var mysql = require('mysql')
var http = require('http')
http.createServer(function (request, response) {
    
        // 发送 HTTP 头部 
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    
        // 发送响应数据 "Hello World"
        response.end('黄康锋   Meaningful Day, Meaningful Life; 有意义的人生，是有意义的时光\n');
    }).listen(8888);
    
    // 终端打印如下信息
    console.log('Server running at :8888/');