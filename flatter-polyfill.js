
// simple recursive function with depth
Array.prototype.myFlatter = function(depth) {
    const makeFlat = (arr, count) => {
      let newArr = []
      arr.map((val) => {
        if (val instanceof Array) {
          if (depth === undefined || depth > count) {
            newArr = newArr.concat(makeFlat(val, count + 1))
          } else {
            newArr.push(val)
          }
          
        } else {
          newArr.push(val)
        } 
      })
      return newArr;
    }
    return makeFlat(this, 0)
}



var a  = [1,2,[3,4,[5,6,[7.1, 7.2, 7.3]],8],9]

console.log(a.myFlatter())