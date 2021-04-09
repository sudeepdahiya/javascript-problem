/**
 * @param {character[][]} matrix
 * @return {number}
 */
var map = {}
var maximalRectangle = function (matrix) {
  let output = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '1') {
        let rect = findRect(matrix, i, j);
        if (rect > output) {
          output = rect;
        }
      }
    }
  }
  return output;
};

function findRect(arr, i, j) {
  let h = i;
  let w = j;
  for (let k = i + 1; k < arr.length; k++) {
    if (arr[k][j] === '1') {
      h++;
    } else {
      break;
    }
  }
  for (let k = j + 1; k < arr[i].length; k++) {
    if (arr[i][k] === '1') {
      w++;
    } else {
      break;
    }
  }
  
  let rect = Math.max(h - i + 1, w - j + 1)
  if (h - i + 1 === 1 || w - j + 1 === 1) {
    return rect;
  }
  let maxWidth = w;
  for (let hi = i + 1; hi <= h ; hi ++ ) {
    for (let wi = j + 1; wi <= maxWidth; wi ++) {
      if (arr[hi][wi] === '1') {
        let inner = (hi - i + 1) * (wi - j + 1)
        if(inner > rect) {
          rect = inner;
        }
      } else {
        maxWidth = wi - 1
        break;
      }
    }
  }
  
  return rect
}
var a = [["1","0","1","1","1"],["0","1","0","1","0"],["1","1","0","1","1"],["1","1","0","1","1"],["0","1","1","1","1"]]
console.log((a))
console.log(maximalRectangle(a))