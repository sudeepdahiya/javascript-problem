var solveSudoku = function (board) {
  let emptyList = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') {
        emptyList.push([i, j])
      }
    }
  }
  let start = 0;
  while (start < emptyList.length) {
    if (board[emptyList[start][0]][emptyList[start][1]] === '.') {
      board[emptyList[start][0]][emptyList[start][1]] = "1";
    } else {
      board[emptyList[start][0]][emptyList[start][1]] = (parseInt(board[emptyList[start][0]][emptyList[start][1]]) + 1).toString();
    }
    if (board[emptyList[start][0]][emptyList[start][1]] > 9) {
      board[emptyList[start][0]][emptyList[start][1]] = '.'
      start--;
    } else if (isValid(board, emptyList[start][0], emptyList[start][1])) {
      start++;
    }
  }
  return board;
};

function isValid(board, ia, ja) {
  let val = board[ia][ja];
  for (let i = 0; i < 9; i++) {
    if (val == board[ia][i] && i !== ja) {
      return false;
    }
    if (val == board[i][ja] && i !== ia) {
      return false;
    }
  }

  let box = [
    [parseInt(ia / 3) * 3, parseInt(ia / 3) * 3 + 2],
    [parseInt(ja / 3) * 3, parseInt(ja / 3) * 3 + 2],
  ];
  for (let i = box[0][0]; i <= box[0][1]; i++) {
    for (let j = box[1][0]; j <= box[1][1]; j++) {
      if (val == board[i][j] && i !== ia && j !== ja) {
        return false;
      }
    }

  }
  return true;
}
