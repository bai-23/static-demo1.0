
//载入模块
var http = require("http");
var fs = require("fs");

function onRequest(req, resp){
  //获取ajax提交的信息
  req.on("data",function(data){

    //打印
    // var data1 = Number(data.c1+1);
    console.log(data)
    console.log("服务端接收："+decodeURIComponent(data));
    
    let send_data = JSON.stringify(data);

    fs.writeFileSync('../db/counts.json', send_data);
  });

  //返回response
  resp.writeHead(200, {"Content-Type": "text/html;charset=utf-8","Access-Control-Allow-Origin":"*"}); 
  //返回响应尾
  resp.end();
}
 
//创建服务器
http.createServer(onRequest).listen(8999);