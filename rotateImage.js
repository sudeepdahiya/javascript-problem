/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let newM = matrix[0].map(a => []);
  console.log('newM', newM)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newM[j].unshift(matrix[i][j])
    }

  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = newM[i][j]
    }

  }
  return newM;
};

var mar = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotate(mar))

console.log('mar', mar)