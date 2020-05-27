// Multiple pointers pattern used.
function areThereDuplicates() {
  let i = 0;
  // Make arguments array copy and sot theme first;
  let args = Array.from(arguments).sort();
  for (var j = 1; j < args.length; j++) {
    if (args[i] !== args[j]) {
      i++;
      args[i] = args[j];
    }
  }
  return i + 1 !== args.length;
}

// areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2); // true
// areThereDuplicates('a', 'b', 'c', 'a'); // true
