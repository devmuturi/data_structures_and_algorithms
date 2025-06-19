function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }

    return -1; // Target not found
}

const numbers = [1, 3, 5, 7, 9, 11];
const target = 7;

const result = binarySearch(numbers, target);
console.log(result); // Output: 3 (since numbers[3] === 7)
