


function myPromise(func) {
  const STATUS = {
    PENDING: 'PENDING',
    FAIL: 'FAIL',
    SUCCESS: 'SUCCESS',
  }
  this.status = STATUS.PENDING;
  this.then = function (thenFun) {
    thenFunList.push(thenFun);
    return this;
  }
  this.catch = function (errorFun) {
    catchFunList.push(errorFun)
  }

  let thenFunList = [];
  let catchFunList = [];


  function reject(error) {
    catchFunList.map(catchFunc => {
      catchFunc(error);
    })
    status = STATUS.FAIL
  }
  function resolve(...arg) {
    let lastResult;
    thenFunList.map((thenFun, i) => {
      if (i === 0) {
        lastResult = thenFun(...arg);
      } else {
        thenFun(lastResult);
      }
    })
    status = STATUS.SUCCESS
  }

  func(resolve, reject);
}

const temp = (resolve, reject) => {
  setTimeout(() => {
    resolve('yes it is done')
  }, 1000)
}

const obj = new myPromise(temp);
console.log(obj)
console.log(obj instanceof myPromise)
obj.then((res) => {
  console.log('then 1', res)
  return `${res} - yes returning`
}).then((res) => {
  console.log('then 2', res)
}).catch((error) => {
  console.log('error', error)
})
