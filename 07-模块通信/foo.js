// console.log(module)

// function add(x, y) {
//   return x + y
// }

// module.exports.add = add

// console.log(module.exports)

var foo = 'bar'

// 1. 放到 module.exports 对象中
module.exports.add = function (x, y) {
  return x + y
}

// 你可以认为每个模块最后都有这么一句代码
// return module.exports
