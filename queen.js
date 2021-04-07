/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
  let output = []
  checkfornext([], 0, n, output);
  // output as per requirment
  return output.map(res => res.map(val => {
    let str = "";
    for (let i = 0; i < n; i++) {
      str += val === i ? 'Q' : '.'
    }
    return str;
  }));
};

function checkfornext(list, next, total, output) {
  for (let i = 0; i < total; i++) {
    if (list.indexOf(i) === -1) {
      let possible = true;

      for(let indx = 0 ; indx < list.length; indx ++){
        let q = list[indx];
        let diff = next - indx;
        let arr = [q + diff, q - diff];
        if (arr.indexOf(i) !== -1) {
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

console.log(solveNQueens(5))