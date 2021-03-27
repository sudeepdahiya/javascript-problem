const arrMatrix = [[1, 2, 9],
[5, 3, 8],
[4, 6, 7]];
//https://www.geeksforgeeks.org/find-the-longest-path-in-a-matrix-with-given-constraints/
const map = {};

const findPath = (arr, i, j, value) => {
  const key = `${i}=${j}`
  if (i < 0 || j < 0 || i >= arr.length || j >= arr.length) {
    return 0;
  }
  if (arr[i][j] === value) {
    if (map[key]) {
      return map[key];
    }
    const cost = 1 + findPath(arr, i, j - 1, arr[i][j] + 1) + findPath(arr, i, j + 1, arr[i][j] + 1) +
      findPath(arr, i - 1, j, arr[i][j] + 1) + findPath(arr, i + 1, j, arr[i][j] + 1);
    map[key] = cost;
    return cost;
  }
  return 0;

}

const getLongestPath = (arr) => {
  let pathCost;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let newpathCost = findPath(arr, i, j, arr[i][j]);
      if (pathCost === undefined || pathCost < newpathCost) {
        pathCost = newpathCost
      }
    }
  }
  return pathCost;
}



console.log({ arrMatrix }, { 'path cost': getLongestPath(arrMatrix) })