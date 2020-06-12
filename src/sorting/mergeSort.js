// Implements merge sort algorithm.

// Helper merge function.
// Accepts two sorted arrays.
function merge(n, m) {
  var newArray = [];
  var i = 0;
  var j = 0;

  while (i < n.length && j < m.length) {
    if (n[i] < m[j]) {
      newArray.push(n[i]);
      i++;
    }
    if (n[i] > m[j]) {
      newArray.push(m[j]);
      j++;
    }
  }

  if (i === n.length) {
    newArray = newArray.concat(m.slice(j));
  }

  if (j === m.length) {
    newArray = newArray.concat(n.slice(i));
  }

  return newArray;
}

// Recursive realization of Merge sort.
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// mergeSort([1,12,34,56,35,2,7,0,100]); -> [0, 1, 2, 7, 12, 34, 35, 56, 100]
// mergeSort([3, 2, 10, 1]); -> [1, 2, 3, 10]
