// You are given a string s.

// Your task is to remove all digits by doing this operation repeatedly:

// Delete the first digit and the closest non-digit character to its left.
// Return the resulting string after removing all digits.

// Note that the operation cannot be performed on a digit that does not have any non-digit character to its left.

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  const stack = [];

  for (const char of s) {
    // Check if the current character is a digit
    if (char >= "0" && char <= "9") {
      // Remove the closest non-digit character to its left
      stack.pop();
    } else {
      // Store the non-digit character
      stack.push(char);
    }
  }

  // Join the remaining characters back into a string
  return stack.join("");
};

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  const numArray = "0123456789";
  const alphaArray = "abcdefghijklmnopqrstuvwxyz";
  const newString = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (numArray.includes(char)) {
      if (alphaArray.includes(newString[newString.length - 1])) {
        newString.pop();
      }
    } else {
      newString.push(char);
    }
  }

  return newString.join("");
};
