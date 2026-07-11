function binarySearch(arr, item, low, high) {
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === item) {
      return mid + 1;
    }

    if (arr[mid] < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log(low);
  return low; // this will remain as it is or it will become high + 1;
}

function binaryInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];

    // Find insertion position
    const position = binarySearch(arr, current, 0, i - 1);

    // Shift elements
    let j = i - 1;
    while (j >= position) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[position] = current;
  }

  return arr;
}

const arr = [5, 2, 9, 1, 7, 3];
console.log(binaryInsertionSort(arr));
// [1, 2, 3, 5, 7, 9]

// Mid for 7 & 8 is same i.e. 4
