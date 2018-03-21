// let foo = 'bar'

// if (true) {
//   // let 声明的变量是块级作用域
//   let foo = 'baz'
//   if (true) {
//     let foo = 'a'
//     if (true) {
//       let foo = 'b'
//       console.log(foo)
//     }
//     console.log(foo)
//   }
//   console.log(foo)
// }

// console.log(foo)

// ReferenceError: foo is not defined
// console.log(foo)

let foo = 'bar'

// SyntaxError: Identifier 'foo' has already been declared
// let foo = 'baz'

// 使用建议
// 变量声明：
//  抛弃 var，拥抱 let
