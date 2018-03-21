var foo = 'bar'

if (true) {
  if (true) {
    if (true) {
      if (true) {
        var foo = 'baz'
      }
    }
  }
}

function f() {
  var foo = 'fff'
  console.log(foo)
}

f()

console.log(foo)
