let str1 = 'AGGTAB';
let str2 = 'GXTXAYB'

const map = {}

const getLongetSubSeq = (a, b, al, bl) => {
  const key = `${al}-${bl}`
  if (map[key]) {
    console.log(`yes...${al}${bl}`)
    return map[key];
  }
  if (al == 0 || bl == 0) {
    map[key] = 0;
    return 0
  }
  if (a[al - 1] === b[bl - 1]) {
    return 1 + getLongetSubSeq(a, b, al - 1, bl - 1)
  }
  const maxValue = Math.max(getLongetSubSeq(a, b, al - 1, bl), getLongetSubSeq(a, b, al, bl - 1))
  map[key] = maxValue;
  return maxValue
}

const optimalSolution = (a, b) => {
  let arr = []
  for (let i = 0; i <= a.length; i++) {
    let lineArr = [];
    for (let j = 0; j <= b.length; j++) {
      lineArr.push(0)
    }
    arr.push(lineArr)
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      if (a[i - 1] === b[j - 1]) {
        arr[i][j] = 1 + arr[i - 1][j - 1]
      } else {
        arr[i][j] = Math.max(arr[i][j - 1], arr[i - 1][j])
      }
    }
  }

  return arr;
}

console.log({ str1 }, { str2 })
console.log(optimalSolution(str1, str2))