/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const newNums = nums.sort((a,b) => a-b);
    let val = 1;
    for(let i = 0 ; i< newNums.length; i++){
        if (newNums[i] > 0){
            if (val > newNums[i]) {
                continue;
            }
            if (val === newNums[i]){
                val++;
            } else {
                return val;
            }
           
        }
    }
    return val;
};