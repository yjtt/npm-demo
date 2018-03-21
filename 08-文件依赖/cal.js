console.log('cal 被加载过了')

require('./a')

function add(x, y) {
  return x + y
}

module.exports.add = add
