// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 1. Quick optimization: Odd length strings can never be valid
  if (s.length % 2 !== 0) return false;

  // 2. Map closing brackets to their corresponding opening brackets
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // 3. Initialize the stack
  const stack = [];

  // 4. Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (bracketMap[char]) {
      // If it's a closing bracket, pop the top element from the stack
      const topElement = stack.pop();

      // If the popped element doesn't match the required opening bracket, it's invalid
      if (topElement !== bracketMap[char]) {
        return false;
      }
    } else {
      // If it's an opening bracket, push it onto the stack
      stack.push(char);
    }
  }

  // 5. If the stack is completely empty, all brackets were valid and closed correctly
  return stack.length === 0;
};
