// Node 将处理Web服务器相关的功能封装到了 http 模块中

// 0. 加载 http 模块
var http = require('http')

// 1. 使用 http.createServer 方法创建一个服务器实例，得到服务端实例对象
var server = http.createServer()

// 2. 为服务器实例对象注册 request 请求事件处理函数
//    请求处理函数
//        request 请求对象，可以获取请求路径、方法、等相关请求数据信息
//        response 响应对象，用来发送响应数据的相关方法
server.on('request', function (request, response) {
  console.log('收到客户端请求了')
  
  // 发送响应数据
  response.write('hello ')
  response.write('nodejs')

  // 发送响应数据结束之后，一定要结束响应
  // 就是告诉浏览器本次的数据发送完毕了，你可以解析使用了
  // 否则浏览器会认为服务器的数据没有发送结束，一直等待
  response.end()
})

// 3. 绑定端口号，启动 Web 服务器
server.listen(3000, function () {
  console.log('服务器启动成功了，请访问 http://localhost:3000/')
})
