// 虽然每个文件模块都是封闭的
// 但是Node为了每个模块系统了一个特殊的对象：module 对象，该对象中有一个对象成员 exports
// module.exports 默认是一个空对象
// 它的作用就是用来模块通信对外导出的
// 你只需要把希望被外部访问的成员放到这个对象中就可以了

// 2. 使用 require 方法加载模块
//    1. 执行被加载模块中的代码
//    2. 得到被加载模块的 module.exports 接口对象
var foo = require('./foo')

console.log(foo)

console.log(foo.add(10, 30))
