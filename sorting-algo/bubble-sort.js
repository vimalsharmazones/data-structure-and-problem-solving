function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // this will place biggest element on the last
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }

  return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];

console.log(bubbleSort(arr));
// Output: [11, 12, 22, 25, 34, 64, 90]
