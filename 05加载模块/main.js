// var foo = 'bar'
// console.log('main')

// require 方法，同步加载模块，执行模块中的代码
// 作用：加载文件模块，解析执行其中的代码
// 文件路径模块不能省略 ./ 或者 ../ 标识
// 因为一旦省略，Node 会把它认为是一个核心模块名

console.log(1)

require('./foo.js')

console.log(4)

// .js 后缀名可以省略
require('./a')

// Error: Cannot find module 'foo.js'
// require('foo.js')
