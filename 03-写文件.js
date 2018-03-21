var fs = require('fs')

// 第一个参数：要写入的文件路径
// 第二个参数：要写入的文件内容
// 第三个参数：回调函数
//    err 成功是 null，失败是 错误对象
//    我们可以通过判断 err 从而得知写文件有没有操作成功
fs.writeFile('./hello.txt', 'hello world', function (err) {
  if (err) {
    throw err
  }
  console.log('写文件操作成功')
})
