

function debounce(func, timmer) {
  let timer = null
  return function (...arg) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...arg);
      // func.call(null, ...arg);
      // func.apply(null, arg);
      // const newFunc = func.bind(null, ...arg);newFunc();
    }, timmer)
  }
}

const printHello = (name, age, dob) => {
  console.log('hello world', name, age, dob)
}

const newPrint = debounce(printHello, 500)

newPrint('sudeep', 17, 10)
newPrint('dahiya', 12, 19)
newPrint('yes yes', 97, 12)

function* gen() {

  yield 10
  yield 13;
}

console.log(gen().next().next())
