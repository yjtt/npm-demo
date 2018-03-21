// Node 将所有特定功能的 API 都封装到了具体的模块中了
// Math.xxx、document.xxx、window.xxx
// 操作文件：fs 模块对象
//    所有文件操作相关的 API 都在 fs 模块对象中
//    例如 readFile 读取文件
//    writeFile 写文件
//    appendFile 追加文件
// http 服务：http 模块对象
// 路径操作：path 模块对象
// 。。。

// 除了 JavaScript 语言可以直接拿来使用，其它 Node 中提供的功能模块都必须显示的调用 require 方法来加载使用

var fs = require('fs')

console.log(1)

// readFile 是异步的，类似于浏览器中的 ajax 异步请求
// 异步代码的执行不会阻塞
// 第一个参数要读取的文件路径
// 第二个参数是一个回调函数
//    err
//      成功 null
//      失败 错误对象
//    data
//      成功 结果数据
//      失败 undefined
fs.readFile('../README.md', function (err, data) {
  console.log(2)
  // console.log(data)
  // console.log(err)
  // if (err) {
  //   console.log('读取文件失败了')
  // } else {
  //   console.log(data.toString())
  // }

  // 如果发生了错误，则抛出异常错误，停止程序的执行
  // throw 不是 Node 专有的，ECMAScript 语言本身就有
  if (err) {
    throw err
  }

  console.log(123)

  console.log(data.toString())
})

console.log(3)
