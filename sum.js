const arra = [1, 5, 11, 4, 4]


const minSum = (arr, i, sum, totalSum) => {
  if (i === 0) {
    return Math.abs(
      (totalSum - sum)
    );
  }
  return Math.min(
    minSum(arr, i - 1, sum + arr[i - 1], totalSum - arr[i - 1]),
    minSum(arr, i - 1, sum, totalSum)
  )
}

const printCount = (total) => {
  if (total < 0) {
    return 0
  }
  if (total === 0) {
    return 1;
  }
  return printCount(total - 1) + printCount(total - 2) + printCount(total - 3)
}

const printCountDP = (dist) => {
  let count = [];
  for (let i = 0; i <= dist; i++) {
    count.push(0)
  }
  count[0] = 1;
  if (dist >= 1)
    count[1] = 1;
  if (dist >= 2)
    count[2] = 2;

  for (let i = 3; i <= dist; i++)
    count[i] = count[i - 1] + count[i - 2] + count[i - 3];

  return count;
}

//const total = arra.reduce((a, b) => a + b)

console.log(10, printCountDP(10))