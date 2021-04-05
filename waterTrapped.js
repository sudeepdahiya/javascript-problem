var trap = function(height) {
    let traped = 0;
    let maxLeft = 0;
    const maxRight = {};
    maxRight[`index${height.length -1}`] = 0
    for(let i = height.length - 2 ;i >= 0 ; i--){
      maxRight[`index${i}`] = Math.max(maxRight[`index${i + 1}`], height[i+1] || 0 )
    }
    for(let i = 0 ;i < height.length-1 ; i++){
        let water = Math.min(maxLeft, maxRight[`index${i}`]) - height[i]
        if (water > 0) {
            traped += water;
        }
        maxLeft = Math.max(maxLeft, height[i])
        
    }
    return traped
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))