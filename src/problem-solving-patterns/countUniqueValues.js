// Multiple pointers pattern used.
// Assuming that input is an ordered numbers array.

function countUniqueValues(array) {
  // Set pointers position
  let firstPointer = 0;
  let secondPointer = 1;
  // Zero if array is empty
  if (!array.length) {
    return 0;
  }

  while (secondPointer < array.length) {
    // Compair pointers
    if (array[firstPointer] !== array[secondPointer]) {
      firstPointer++;
      array[firstPointer] = array[secondPointer];
    } else {
      secondPointer++;
    }
  }

  return firstPointer + 1;
}

// countUniqueValues([1,1,1,1,1,1,2]);
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13,13]);
// countUniqueValues([]);
// countUniqueValues([-2,-1,-1,0,1]);
