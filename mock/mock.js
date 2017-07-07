// 使用mock.js随机生成模拟数据 相比faker.js 推荐 
var Mock = require('mockjs')
var data = Mock.mock({      // 数据库都在这
    "users|1-10": [{
            "name|+1": [
                "林茂荣",
                "王莉",
                "李建喜"
            ]
        }],
	"xxxx|1-3": [{
	    "name|+1":'@cname'
	}],
	"randomtest":{
		"booleantest|+2":'@natural'
	},
	"range":{
		"rangetest":'@range(6)',
		"rangetestone":'@range(1,10,6)',
		"rangetesttwo":'@range(1,10,2)',
		"rangetestthree":'@range(1,10,5)'
	},
	"province": {
	    "110000|2": [{
		    "name|+1":'@cname'
		}],
	    "120000|3-5":['测试'],
	    "130000": "河北省",
	    "140000": "山西省"
    },
    "date":{
    	"dateone":'@date("yyyy-MM-dd")'
    },
    "province|15":[
    {
    	"provincetest":'@province',
		"id|+1":1
	}
    ],
    'idoptions|3':{
    	'id|+1':{'xx':2}
    }
})

// 输出结果
module.exports = () => data