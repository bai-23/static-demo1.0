const express = require("express");
const app = express();
const mysql  = require('mysql');


// 创建连接
var connection = mysql.createConnection({
    host     : 'aoau.top',
    user     : 'root',
    password : '242166SJx.',
    port: '3306',
    // database: 'test'
});

// 连接，有错报错
connection.connect( (err)=>{
    if (err) throw err;
    console.log("连接成功！！");
});

// 开启服务器
app.listen(3000, ()=>{
    console.log("服务器已开启在3000。。。")
})

var  sql = `SELECT * FROM employees ORDER BY salary DESC`;
var sql1 = 'show databases'
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    // res.send("Database select success!");
    console.log('------------------------------------------------------------\n\n');
});
    
connection.end();
