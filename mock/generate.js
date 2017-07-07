
// 使用faker.js生成随机模拟数据 但是有问题 不推荐
module.exports = function(){
  var faker =require("faker");
  var _ = require("lodash");
  return {
    people: _.times(5,function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    })
  }
}