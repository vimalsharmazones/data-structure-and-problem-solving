// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // Loop through the array from the last element to the first
  for (let i = digits.length - 1; i >= 0; i--) {
    // If the current digit is less than 9, increment it and return
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    // If the digit is 9, it becomes 0 due to carry-over
    digits[i] = 0;
  }

  // If the loop finishes, it means all digits were 9 (e.g., [9, 9, 9])
  // We add a '1' at the front of the array (resulting in [1, 0, 0, 0])
  digits.unshift(1);
  return digits;
};
