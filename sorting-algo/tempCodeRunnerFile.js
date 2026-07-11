function binarySearch2(arr, item, left, right) {
  while (left <= right) {
    let mid = Math.floor((right - left) / 2);

    if (arr[mid] === item) {
      return mid;
    }
    if (arr[mid] < item) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

function binaryInsertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentItem = arr[i];

    let position = binarySearch2(arr, currentItem, 0, i - 1);

    j = i - 1;
    while (j > position) {
      arr[j + 1] = arr[j];
      --j;
    }
    arr[position] = currentItem;
  }

  return arr;
}

console.log(binaryInsertionSort2([5, 2, 9, 1, 7, 3]));