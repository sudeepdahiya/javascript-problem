function promiseAll(promises) {
  let results = [promises.map(() => 0)];
  let completedPromises = 0;
  return new Promise(function (resolve, reject) {
    promises.forEach((promise, i) => {
      if (promise instanceof Promise) {
        promise.then(function (promiseResult) {
          results[i] = promiseResult;
          completedPromises++;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
          .catch(function (error) {
            reject(error);
          });
      } else {
        completedPromises++;
        results[i] = promise;
        if (completedPromises === promises.length) {
          resolve(results);
        }
      }
    });
  });
};

const temp = (resolve, reject) => {
  setTimeout(() => {
    resolve('first params');
  }, 2000);
}
const temp2 = { data: 'this is dumy' }
const temp3 = (resolve, reject) => {
  setTimeout(() => {
    resolve('last params');
  }, 1000);
}

const res = promiseAll([new Promise(temp), 998, new Promise(temp3)]);
res.then(abc => {
  console.log('abc', abc)
  return abc.concat([0])
}).catch(error => {
  console.log('error', error)
})
