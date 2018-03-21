// 1. 换行麻烦
// 2. 变量拼接麻烦

var person = {
  name: 'Jack',
  age: 18,
  gender: '男'
}

// var str = '大家好，我叫'+ person.name +'，我今年'+ person.age +'岁了，我是'+ person.gender +'生'

var str = `大家好
我叫${person.name}
我今年${person.age}岁了
我是${person.gender}生`

console.log(str)

// 使用建议：
//    如果不做拼接也不做换行，则还是单引号（双引号）声明字符串
//    如果需要拼接或是换行，则使用模板字符串
