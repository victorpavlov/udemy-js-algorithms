// Helper sawep function.
function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// Bubble sort JS

// Naive.

// function bubbleSort(arr) {
//   for(let i = arr.length; i > 0; i--) {
//     for(let j = 0; j < i - 1; j++) {
//       if(arr[j] > arr[j + 1]) swap(arr, j, j + 1);
//     }
//   }

//   return arr;
// }

// Optimized.

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

bubbleSort([2, 3, 14, 234, 1, 0, 34, 56]); // [0,1,2,3,14,34,56,234]
