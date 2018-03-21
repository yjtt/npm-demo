// require('fs')
// require('http')
// require('./foo')

// 0. 找包
// 1. 下载
//    npm install 包名
// 2. require 加载
// 3. 使用

// 0. npm install marked 下载


// 1. 加载 
var marked = require('marked')

// 2. 使用
// 作用：将 markdown 格式的字符转换为  html 格式字符串
var htmlStr = marked('# hello')

console.log(htmlStr)
