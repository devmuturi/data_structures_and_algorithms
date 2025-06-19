// Accessing an element in an array by its index
function getElementAtIndex(arr, index) {
  return arr[index]
}

const myArray = [10, 20, 30, 40, 50];
console.log(getElementAtIndex(myArray, 3))

// Calculating sum of first N natural number
function sumOfNaturalNumber(n) {
  return n * (n - 1) / 2;
}

console.log(sumOfNaturalNumber(20))
console.log(sumOfNaturalNumber(200000000))
