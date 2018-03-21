var foo = 'bar'

// 在 Node 中，没有全局作用域（不严谨）
// 结论：在Node中的文件模块中定义的变量只属于当前文件模块，谁也得到不到我
// 文件模块是封闭的
//    1. 无法访问外部
//    2. 外部也无法访问内部
// 模块作用域是一件好事儿，因为妈妈再也不用担心我变量命名污染冲突的问题了

require('./foo')

console.log(foo)
