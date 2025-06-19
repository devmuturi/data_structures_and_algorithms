// Find largest number in the array

// Given an array of integers, find the maximum(greatest) element in the array
// Input: [3, 5, 7, 2, 8, -1, 4, 10, 12]
// Output: 12

// Approaches
// 1.Brute force approach
function findMax(arr) {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i]
    }
  }
  return maxElement
}

const myArray = [3, 5, 7, 2, 8, -1, 4, 10, 12]
console.log(findMax(myArray))

// 2. Use JavaScript built in methods
// console.log(Math.max(myArray))
// The above won't work because Math.max() doesn't accept an array directly - it expects individual numbers as arguments
// What you need to do is spread the array:
console.log(Math.max(...myArray))
// Time complexity here is linear

// 3. Divide and Conquer approach(Recursive)
// Recursive divides an array into two halves and find the maximum in each half.
function findMaxRecursively(arr, start, end) {
  if (start === end) {
    return arr[start];
  }

  const mid = Math.floor((start + end) / 2);
  const maxLeft = findMaxRecursively(arr, start, mid);
  const maxRight = findMaxRecursively(arr, mid + 1, end);

  return Math.max(maxLeft, maxRight);
}

console.log(findMaxRecursively(myArray, 0, myArray.length - 1))