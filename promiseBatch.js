let arr = [3, 2, 1, 7, 5, 3, 1, 4, 3, 1];
const promiseList = [];

for (let i in arr) {
  promiseList.push(() => {
    return generatePromise(arr[i], i);
  });
}

function generatePromise(timer, index) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(`promsie done; index - ${index} timer - ${timer}`);
      res(index);
    }, timer * 1000);
  });
}

async function batchPromise(listPromise, batchCount) {
  for (let i = 0; i < listPromise.length; i += batchCount) {
    let arr = [];
    for (let j = i; j < i + batchCount && j < listPromise.length; j++) {
      arr.push(listPromise[j]);
    }
    await Promise.all(arr.map((v) => v()));
    console.log(`${i} - ${i + batchCount} complete`);
  }
}

function batchPromise2(listPromise, batchCount) {
  let currentIndex = batchCount;
  let status = {};
  for (let i = 0; i < batchCount; i++) {
    startProcess(i);
  }
  async function startProcess(processId) {
    if (processId >= listPromise.length) {
      return;
    }
    status[processId] = "S";
    console.log("S", status);
    await listPromise[processId]();
    delete status[processId];
    startProcess(currentIndex++);
  }
}

batchPromise2(promiseList, 3);
