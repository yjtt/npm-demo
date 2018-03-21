// var arr = [1, 2, 3]

// // var a = arr[0],
// //   b = arr[1],
// //   c = arr[2]

// 数组是按照顺序来解构的
// var [a, b, c] = arr

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// var obj = {
//   name: 'Jack',
//   age: 18
// }

// var name = obj.name,
//   age = obj.age

// 对象按照键名解构，和顺序没有关系
// 对象支持解构的时候起别名
// var {age, name: nickname, gender} = obj

// console.log(nickname)
// console.log(age)

// var a = 10
// var b = 20

// var [a, b] = [b, a] // [20, 10]

// console.log(a, b)

// var fs = require('fs')

var {readFile} = require('fs')

readFile('./hello.txt', function (err, data) {
  if (err) {
    throw err
  }
  console.log(data.toString())
})
