//const str1 = "cart", str2 = "march";
const str1 = "sunday", str2 = "saturday"
const map = {};

const getEditDistance = (a, b, al, bl) => {
  const key = `${al}-${bl}`
  if (al === 0) {
    return bl;
  }
  if (bl === 0) {
    return al;
  }
  if (map[key]) {
    return map[key];
  }
  if (a[al] === b[bl]) {
    const data = getEditDistance(a, b, al - 1, bl - 1);
    map[key] = data;
    return data;
  }
  const data = 1 + Math.min(
    getEditDistance(a, b, al - 1, bl - 1),
    getEditDistance(a, b, al, bl - 1),
    getEditDistance(a, b, al - 1, bl),
  )
  map[key] = data;
  return data
}


const optimalSolution = (a, b) => {
  let arr = [];
  for (let i = 0; i <= a.length; i++) {
    let lineArr = [];
    for (let j = 0; j <= b.length; j++) {
      if (j === 0 && i === 0) {
        lineArr.push(0);
      } else if (i === 0) {
        lineArr.push(j)
      } else if (j === 0) {
        lineArr.push(i)
      } else {
        lineArr.push(0)
      }
    }
    arr.push(lineArr)
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      if (a[i - 1] === b[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1]
      } else {
        arr[i][j] = 1 + Math.min(arr[i][j - 1], arr[i - 1][j], arr[i - 1][j - 1])
      }
    }
  }
  return arr;
}

console.log({ str1 }, { str2 })
console.log(optimalSolution(str1, str2))