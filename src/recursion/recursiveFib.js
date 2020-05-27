// Recursively

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

// 1,1,2,3,5,8,13,21,34,55
// 10,9,8,7,6,5,4,3,2,1,0

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
