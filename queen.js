/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
  let output = []
  checkfornext([], 0, n, output);
  // output as per requirment
  return output.map(res => res.map(val => 'Q'.padStart(val+1, '.').padEnd(n,'.')));
};

function checkfornext(list, next, total, output) {
  for (let i = 0; i < total; i++) {
    if (list.indexOf(i) === -1) {
      let possible = true;

      for(let indx = 0 ; indx < list.length; indx ++){
        let q = list[indx];
        let diff = next - indx;
        if (q + diff === i || q - diff === i) {
          possible = false;
          break;
        }
      }
      if (possible) {
        if (list.length === total - 1) {
          output.push([...list, i]);
        }
        checkfornext([...list, i], next + 1, total, output)
      }
    }
  }
}

console.log(solveNQueens(4))