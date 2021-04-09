/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let output = 0;
    if (matrix.length === 0) return 0
    let heights = Array.from(Array(matrix[0].length).keys(), k => 0);
    for (let i = 0; i < matrix.length; i++) {
        heights = matrix[i].map((val, index) => {
            return val === '0' ? 0 : (1 + heights[index]);
        })
        let area = largestRectangleArea(heights);
        if (area > output) {
            output = area;
        }

    }
    return output;
};


var ignore = {};
function largestRectangleArea(heights) {
    let max = 0;
    ignore = {};
    for (let i = 0; i < heights.length; i++) {
        if (ignore[i]) {
            continue;
        }
        let h = heights[i]
        let w1 = leftSide(heights, i, heights[i]);
        let w2 = rightSide(heights, i, heights[i]);
        let area = (w1 + w2 + 1) * h
        if (area > max) {
            max = area;
        }
    }
    return max;
};

function leftSide(heights, i, val) {
    let c = 0;
    while (i >= 0) {
        if (heights[--i] >= val) {
            c++;
        } else {
            return c;
        }
    }
    return c;
}

function rightSide(heights, i, val) {
    let c = 0;
    while (i < heights.length) {
        if (heights[++i] >= val) {
            if (heights[i] === val) {
                ignore[i] = true;
            }
            c++;
        } else {
            return c;
        }
    }
    return c;
}


var a = [["0", "1"]]
console.log((a))
console.log(maximalRectangle(a))