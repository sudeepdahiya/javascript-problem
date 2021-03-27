var a = {b: {c:'hello world', f: [1,3,4]}, c:[1,{'f':'hello'},4,5], f: () => {console.log('a')}, date:new Date()}

//console.log(JSON.stringify(a));
const jsonStr = (obj) => {
  if (typeof obj !== 'object') {
    if (typeof obj === 'number'){
      return `${obj}`;
    }
    return `"${obj}"`;
  }
  if (obj instanceof Array) {
    return `[${obj.map(val => {
      return jsonStr(val)
    })}]`
  } else if(obj instanceof Date) {
    return `"${obj.toISOString()}"`;
  } else {
    let str = []
    for(let i in obj) {
      if (typeof obj[i] !== 'function'){
        str.push(`"${i}":${jsonStr(obj[i])}`)
      }
    }
    return `{${str.join(',')}}`
  }
}
// console.log(jsonStr(a))

var a = 'hello world this is new game'
String.prototype.mySplit = function (type) {

  let a = this
  console.log({A:a.String})
  let output = [];
  while(a.indexOf(type) !== -1) {
    
    output.push(a.substring(0,a.indexof(type)))
    a = a.substring(a.indexof(type) + 1, a.length)
  }
  console.log(output)
}

console.log(a.mySplit(' '))