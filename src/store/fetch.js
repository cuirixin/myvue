require('es6-promise').polyfill()
require('isomorphic-fetch')

const fetchmethod=(method,url,param,cb)=>{
	let baseUrl="http://localhost:5004/"
	let init,database
	method=method.toUpperCase()  // 全部大写  防止报错 主要针对patch请求报错
	if(method=='GET'){  // get请求分页排序什么的参数比较多显得url比较长我们写这个方法 url上的参数用body传，显得代码好看（本质还是在url上）
		if(param&&param!={}){
		Object.keys(param).forEach((data,index)=>{
			if(index==0){
			  url+='?'+data+'='+Object.values(param)[0]
			}else{
			  url+='&'+data+'='+Object.values(param)[index]	
			}
			
		})
		init={    // 初始化的一些设置
			method:method,
		    headers:{
		        "Content-type":"application/json"
		    }
		  }
		}
	}else if(method=='DELETE'){
		init={    // 初始化的一些设置
			method:method,
		    headers:{
		        "Content-type":"application/json"
		    }
		  }
	}else{     //post PATCH put 请求 PUT用于替换资源，而PATCH用于更新部分资源 post用于向数据库中扔资源 注意：PATCH请求时候 必须用大写
		init={
			method:method,
		    headers:{
		        "Content-type":"application/json"
		    },
		    body:JSON.stringify(param)
		}
	}

	// 调用fentch方法 此时数据是异步返回的

		fetch(baseUrl+url,init)
	    .then((response)=>{  // 所有状态码操作可以写在下面
	        if(!response.ok){  // 存在问题时也可以cb数据 临时先打印吧  
	            console.log("存在问题 (状态码为:"+response.status+" 状态描述:"+response.statusText+")");
	            return;
	        }
	        //检查响应文本（请求无误时返回的数据） 
	        response.json().then((data)=>{
	        	if(method!='GET'){
	        		cb('success')
	        	}else{
	        		cb(data)  // 因为数据是异步，所以要加回调才能传到vuex中(拿到数据再执行此cb函数放在vuex中)  巧妙不 哼哼 帅死了 啊哈哈
	        	}	    
	        })
	    })
		.catch((err)=>{
		    console.log("请求错误:"+err);
		});
 }   

 export default fetchmethod