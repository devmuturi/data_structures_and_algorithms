function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Step: ${i}`)
    console.log("***************")
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const myArray = [12, 4, 56, 67, 89, 6, 45];
console.log(linearSearch(myArray, 6))