http://mockjs.com/examples.html     (方法地址)
json-server  -p 5004 -w mock/mock.js或者在package.json的scripts标签中配置启动方法  本系统采用第二种  启动的时候比较方便    (启动查看模拟数据的方法)
如果webpack的热加载报错 记住 可能node版本编译的时候出错  换一个node版本试一下 可能就解决了问题
1. 遇见加载资源失败问题 代码 net....CONFUSED	
simplemde 文本编辑器 现在还未安装
lodash 基本用法
var _=require('lodash')

Array 操作
_.chunk([],number) // 将数组按照number的长度进行拆分 拆成一个个的数组放在数组中  eg: let x=_.chunk(['a', 'b', 'c', 'd','e'],3)   [['a','b','c'],'d','e']]
_.compact([0, 1, false, 2, '', 3]); => [1, 2, 3] 返回去除false, null, 0, "", undefined, NaN  元素的数组
_.concat([1], 2, [3], [[4]]); => [1, 2, 3, [4]]  链接数组中的元素成一个新数组
_.difference([2, 3,4,5], [2, 3,6]);=>[4,5]   第一个数组相比较第二个数组 返回不同的元素 按照的是全等原则 即2与“2”不相同
