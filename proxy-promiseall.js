const temp = (resolve, reject) => {
  setTimeout(() => {
    reject('first params');
  }, 1000);
}
const temp2 = { data: 'this is dumy' }
const temp3 = (resolve, reject) => {
  setTimeout(() => {
    resolve('last params');
  }, 2000);
}

function all(funcs) {
  let thenFunc = []
  let errorFunc = () => { }
  let status = new Proxy([], {
    set: checkForStatus
  })
  function checkForStatus(obj) {
    if (status.length === funcs.length) {
      let lastoutput;
      for (let i = 0; i < thenFunc.length; i++) {
        if (!lastoutput) {
          lastoutput = thenFunc[i](obj.sort((a, b) => a.i - b.i).map(a => a.answer))
        } else {
          lastoutput = thenFunc[i](lastoutput)
        }
      }
    }
    return Reflect.set(...arguments);
  }
  funcs.map((func, i) => {
    if (func instanceof Promise) {
      func.then((answer) => {
        status.push({ answer, i });
      }).catch((error) => {
        if (typeof errorFunc === 'function') {
          errorFunc(error);
          errorFunc = null;
          status = [];
          thenFunc = []
        }
      })
    } else {
      status.push({ answer: func, i });
    }
  })
  let output = {
    then: function (userThen) {
      thenFunc.push(userThen);
      return output
    },
    catch: function (userError) {
      errorFunc = userError
    }
  }
  return output;
}

const res = all([new Promise(temp), temp2, new Promise(temp3)]);
res.then(abc => {
  console.log('abc', abc)
  return abc.concat([0])
}).then((res) => {
  console.log({ res })
}).catch(error => {
  console.log('error', error)
})
