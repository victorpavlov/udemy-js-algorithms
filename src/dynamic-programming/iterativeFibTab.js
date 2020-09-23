// Iterative with tabulation.

function fib(n){
  if(n <= 2) return 1;
  var fibNums = [0,1,1];
  
  for(var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }

  return fibNums[n];
}

// 1,1,2,3,5,8,13,21,34,55
// 10,9,8,7,6,5,4,3,2,1,0

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
