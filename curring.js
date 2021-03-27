
function sum(a, b, c) {
  return a + b + c;
}

let ab1 = curry2(sum);
let ab2 = curry(sum);

function curry(func) {
  let params = [];
  return function currRec(...arg) {
    params = params.concat(arg)
    if (params.length === func.length) {
      return func.call(null, ...params);
    }
    return currRec
  }
}

function curry2(func) {
  return function currRec(...arg) {
    if (arg.length === func.length) {
      return func.apply(null, arg)
    }
    return function (...args2) {
      currRec.apply(null, args.concat(args2));
    }
  }
}

console.log('hi', ab1(3, 2, 1), ab2(3, 2)(2))