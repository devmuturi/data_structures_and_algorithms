// Let consider this approaches
// 1. Loop-based approach:

function sumOfFirstNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumOfFirstNumbers(2))

// Formula-based approach:
function sumOfNumbers(n) {
  return (n * (n + 1)) / 2;
}

// Comparing time complexities
// Loop - O(n) because it grows lineary with n
// Formula - O(1) takes constant time