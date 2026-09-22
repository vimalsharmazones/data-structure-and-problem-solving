function countingSort(arr) {
  if (arr.length === 0) {
    return arr;
  }

  // Find the maximum element
  const max = Math.max(...arr);

  // Create and initialize the count array
  const count = new Array(max + 1).fill(0);

  // Count the frequency of each element
  for (const num of arr) {
    count[num]++;
  }

  // Reconstruct the sorted array
  let index = 0;

  for (let i = 0; i <= max; i++) {
    while (count[i] > 0) {
      arr[index++] = i;
      count[i]--;
    }
  }

  return arr;
}

// Example
const arr = [4, 2, 2, 8, 3, 3, 1];

console.log(countingSort(arr));
// Output: [1, 2, 2, 3, 3, 4, 8]
