
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