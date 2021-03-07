//引入文件模块
const fs = require('fs');
//定义json文件路径
const path="../db/apktools.json";
//开始读取文件的信息
fs.readFile(path,function(err,data){
	if(err){
		console.log(err);
	}else{
		let user=data.toString();	//将Buffer转换成字符串
		user=JSON.parse(user);		//将数据转换为 JavaScript对象。 
        // console.log(user[0].countdowns);
        
        countNew = ++user[0].countdowns;
        // console.log(countNew);
        // 写入
        // user.users.push(new_user);	//我所得到的数据里users是一个数组，所以直接push进去
		let new_data=JSON.stringify(countNew);	//将json对象转化为字符处才能存储进去
		fs.writeFile(path,new_data,function(err){
			if(err){
				console.log(err);
			}else{
				console.log("数据添加成功！");
			}
		})
	}
});