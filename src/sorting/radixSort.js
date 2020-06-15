// Radix sort algorythm example.

//
// Helpers
//

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

//
// Sorting
//

function radixSort(nums) {
  // Define most digits number.
  let maxDigitCount = mostDigits(nums);
  // Number of loops = mostDigits.
  for (let k = 0; k < maxDigitCount; k++) {
    // Define slots.
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // Checking each number in array.
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // Merge back in array.
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// radixSort([23,345,5467,12,2345,9852])
