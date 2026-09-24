// Given an array nums, you can perform the following operation any number of times:

// Select the adjacent pair with the minimum sum in nums. If multiple such pairs exist, choose the leftmost one.
// Replace the pair with their sum.
// Return the minimum number of operations needed to make the array non-decreasing.
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function (nums) {
  let operations = 0;

  while (nums.length > 1) {
    let isSorted = true;
    let minSum = Infinity;
    let targetIndex = -1;

    // Find if the array is sorted and look for the leftmost pair with minimum sum
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        isSorted = false;
      }

      let currentSum = nums[i] + nums[i + 1];
      // Use strict less-than to ensure we pick the leftmost pair on ties
      if (currentSum < minSum) {
        minSum = currentSum;
        targetIndex = i;
      }
    }

    // Break early if the array satisfies the non-decreasing condition
    if (isSorted) {
      break;
    }

    // Merge the selected adjacent pair
    nums[targetIndex] = minSum;
    nums.splice(targetIndex + 1, 1);
    operations++;
  }

  return operations;
};
