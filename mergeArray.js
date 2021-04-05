/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let total = [];
  let n1 = 0;
  let n2 = 0;
  while (n1 < nums1.length && n2 < nums2.length) {
    if (nums1[n1] > nums2[n2]) {
      total.push(nums2[n2++])
    } else {
      total.push(nums1[n1++])
    }
  }
  while (n1 < nums1.length ) {
    total.push(nums1[n1++])
  }
  while (n2 < nums2.length ) {
    total.push(nums2[n2++])
  }
  let isEven = total.length % 2 === 0;
  let count = parseInt(total.length / 2);
  if (isEven) {
    return (total[count] + total[count - 1]) / 2
  }
  return total[count]
};

console.log(findMedianSortedArrays([1, 3, 4],[2]))