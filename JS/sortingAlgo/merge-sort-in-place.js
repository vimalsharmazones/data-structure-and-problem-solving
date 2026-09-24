function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);

  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);

  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }

  while (i < leftArr.length) {
    arr[k++] = leftArr[i++];
  }

  while (j < rightArr.length) {
    arr[k++] = rightArr[j++];
  }
}

// Example
const arr = [38, 27, 43, 3, 9, 82, 10];

mergeSort(arr);

console.log(arr);
// [3, 9, 10, 27, 38, 43, 82]
