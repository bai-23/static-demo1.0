//引入文件模块
const fs = require('fs');
//定义json文件路径
const path="./jishu.json";

//开始读取文件的信息
fs.readFile(path,function(err,data){
	if(err){
		console.log(err);
	}else{
		let count_bef = data.toString();	//将Buffer转换成字符串
        
        count_bef = JSON.parse(count_bef);		//将数据转换为 JavaScript对象。 
        // console.log("读取："+count_bef);
        
        // 自加
        let count_afr;
        setTimeout(function(){
            count_afr = ++count_bef;
            let new_data=JSON.stringify(count_afr);	//将json对象转化为字符处才能存储进去
            fs.writeFile(path, new_data, function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log(new_data);
                }
            })

        }, 1000)

	}
});