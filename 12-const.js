// var foo = 'bar'

// const foo = 'bar'

// console.log(foo)

// // 常量是不允许修改的
// // TypeError: Assignment to constant variable.
// foo = 'baz'

// console.log(foo)

// SyntaxError: Missing initializer in const declaration
// const foo

// 所有常量都不允许重新赋值
const foo = 'bar'

const obj = {
  name: 'Jack'
}

// 修改
obj.name = 'Mike'

console.log(obj)

const arr = [1, 2, 3]

arr.push(4)

console.log(arr)

// 重新赋值
// obj = {}

if (true) {
  const foo = 'baz'
}

console.log(foo)

// 1. 凡是变量使用 let
// 2. 凡是不变的都使用 const

// 如果你定义的成员，一次都没有改过，使用 const
//  从来没有出现 xx = xx 代码，则就是常量

// 如果你定义的成员，最少做了一次修改，则一定是 let

// 所以相对于来讲，const 使用要更多一些。

// 最佳使用建议：全部 const ，报错的时候改为 let
// 常量相比变量效率更高，更踏实
