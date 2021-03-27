var a = { b: { c: 'hello world', f: [1, 3, 4] }, c: [1, { 'f': 'hello' }, 4, 5], f: () => { console.log('a') }, date: new Date() }

//console.log(JSON.stringify(a));
const jsonStr = (obj) => {
  if (typeof obj !== 'object') {
    if (typeof obj === 'number') {
      return `${obj}`;
    }
    return `"${obj}"`;
  }
  if (obj instanceof Array) {
    return `[${obj.map(val => {
      return jsonStr(val)
    })}]`
  } else if (obj instanceof Date) {
    return `"${obj.toISOString()}"`;
  } else {
    let str = []
    for (let i in obj) {
      if (typeof obj[i] !== 'function') {
        str.push(`"${i}":${jsonStr(obj[i])}`)
      }
    }
    return `{${str.join(',')}}`
  }
}
// console.log(jsonStr(a))

var a = 'hello world this is new game'
String.prototype.mySplit = function (type) {
  let str = this
  console.log({ str })
  let output = [];
  while (str.indexOf(type) !== -1) {
    output.push(str.substring(0, str.indexOf(type)))
    str = str.substring(str.indexOf(type) + 1, str.length)
  }
  return output.concat(str);
}

Array.prototype.myReve = function () {
  let output = [];
  for (let i = this.length - 1; i >= 0; i--) {
    output.push(this[i])
  }
  return output
}

Array.prototype.myjoin = function (opr) {
  let str = "";
  this.map(val => {
    str += `${opr}${val}`
  })
  return str.substring(1, str.length);
}

console.log(a.mySplit(' ').myReve().myjoin(' '))