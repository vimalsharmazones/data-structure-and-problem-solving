// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = s.length;
  const halfLength = Math.floor(s.length / 2);

  for (let i = 0; i < halfLength; i++) {
    const frontChar = s[i];
    const backReverseIndex = len - 1 - i;
    s[i] = s[backReverseIndex];
    s[backReverseIndex] = frontChar;
  }

  return s;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap elements using ES6 destructuring assignment
    const leftChar = s[left];
    s[left] = s[right];
    s[right] = leftChar;

    // Move the pointers toward the center
    left++;
    right--;
  }
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap elements using ES6 destructuring assignment
    [s[left], s[right]] = [s[right], s[left]]; // It is slow

    // Move the pointers toward the center
    left++;
    right--;
  }
};
