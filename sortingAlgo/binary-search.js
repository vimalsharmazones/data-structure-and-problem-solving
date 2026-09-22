function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (target < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72];

console.log(binarySearch(arr, 23)); // 5
