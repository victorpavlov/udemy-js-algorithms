// Selection sort JS implementation.
function selectionSort(arr) {
  var smallestIndex;
  for (var i = 0; i < arr.length - 1; i++) {
    // Assign firs small el.
    smallestIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    if (i !== smallestIndex) {
      swap(arr, smallestIndex, i);
    }
  }
  return arr;
}

// Helper Small function.
function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// selectionSort([22,1,120,3,48]) // [1,3,22,48,120]
