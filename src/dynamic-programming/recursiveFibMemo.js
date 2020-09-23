// Recursively with memoization.

function fib(n, memo=[]){
  if(memo[n] !== undefined) return memo[n];
  if(n <= 2) return 1;
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}

// 1,1,2,3,5,8,13,21,34,55
// 10,9,8,7,6,5,4,3,2,1,0

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465