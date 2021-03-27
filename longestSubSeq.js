let arrCounter = [10, 22, 9, 33, 21, 50, 41, 60, 80];

const getLongetSubSeq = (arr) => {
  let maxSeq = 0;
  for (let i = 0; i < arr.length; i++) {
    let seq = 1;
    let max = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (max < arr[j]) {
        max = arr[j];
        seq++
      }
    }
    if (maxSeq < seq) {
      maxSeq = seq
    }
  }
  return maxSeq
}

const optimalSolution = (arr) => {
  const lis = arr.map(a => 1)
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }
  return lis;
}

console.log({ arrCounter }, optimalSolution(arrCounter), getLongetSubSeq(arrCounter))