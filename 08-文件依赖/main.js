var foo = require('./foo')

// console.log(cal.add(1, 2))

// 加载过的模块会把结果缓存起来
// 多次加载不会重复执行，会直接从缓存中拿
var cal = require('./cal')

console.log(foo.ret)

console.log(cal.add(1, 2))

// 模块作用域
// require 方法
//   有缓存能力
//   fs
//   http
//   ./xxx
// module.exports 接口对象
