function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);

    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  /// We are finding all the Small numbers and placing them in the i postion and i++, When finsed than putting pivot at i+1 postion
  // So all element on left are smaller than pivot and all element on right are larger than pivot.
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Example
const arr = [10, 7, 8, 9, 1, 5];
console.log(quickSort(arr)); // [1, 5, 7, 8, 9, 10]

function quickSort2(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition2(arr, low, high);
    quickSort2(arr, low, pivotIndex - 1);
    quickSort2(arr, pivotIndex + 1, high);
  }

  return arr;
}

function partition2(arr, low, high) {
  let i = low - 1;
  const pivot = arr[high];

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      const temp = arr[++i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  arr[high] = arr[++i];
  arr[i] = pivot;
  return i;
}

const arr = [10, 7, 8, 9, 1, 5];
console.log(quickSort2(arr)); // [1, 5, 7, 8, 9, 10]
