function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    // Shift elements greater than key one position to the right
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the key into its correct position
    arr[j + 1] = key;
  }

  return arr;
}

// Example
const arr = [12, 11, 13, 5, 6];

console.log(insertionSort(arr));
// Output: [5, 6, 11, 12, 13]
