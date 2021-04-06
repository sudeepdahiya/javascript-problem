/**
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function (ratings) {
  let map = [0];
  let increment = 0;
  let currVal = ratings[0]
  for(let i = 1 ; i < ratings.length ; i++){
    if (currVal < ratings[i]) {
      increment++;
    } else {
      increment = 0;
    }
    currVal = ratings[i]
    map.push(increment)
  }

  increment = 0;
  currVal = ratings[ratings.length -1]
  for(let i = ratings.length - 2 ; i >= 0; i--){
    if (currVal < ratings[i]) {
      increment++;
    } else {
      increment = 0;
    }
    currVal = ratings[i]
    map[i] = Math.max(increment, map[i])
  }
  console.log('map',map)
  return map.reduce((a,b) => a +b) + ratings.length;
}
var candy2 = function (ratings) {
 let sum = 0;
  for (let i = 0; i < ratings.length; i++) {
    const leftDiff = findLeft(ratings, i - 1, ratings[i]);
    const rightDiff = findRight(ratings, i + 1, ratings[i]);
    sum += Math.max(leftDiff, rightDiff);
  }
  return sum + ratings.length;
};

function findLeft(ratings, i, val) {
  let count = 0;
  let curVal = val
  while (i >= 0) {
    if (ratings[i] < curVal) {
      count++;
      curVal = ratings[i--]
    } else {
      return count;
    }
  }
  return count;
}

function findRight(ratings, i, val) {
  let count = 0;
  let curVal = val
  while (i < ratings.length) {
    if (ratings[i] < curVal) {
      count++;
      curVal = ratings[i]
      i++;
    } else {
      return count;
    }
  }
  return count;
}
var value =  [1,0,2];
console.log(value)

console.log(candy(value))