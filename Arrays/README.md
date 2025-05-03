# Arrays

Array is a data structure used to store multiple elements.

For example, an algorithm can be used to look through an array to find the lowest value.

In Ruby, an array can be created like this:
    my_array = [7, 12, 9, 4, 11]

# Algorithms: Find the lowest value in an array.
How it works:
    1. Go through the values in an array one by one.
    2. Check if the current value is the lowest so far, if it is, store it.
    3. After looking at all the values, the stored value will be the lowest of the values in the array

# Pseudocode
variable "minVal" = array[0]

For each element in the array
    If current element < minVal
        minVal = current element

Refer to the array.rb for the code in the array folder.

# Algorithm Time complexity
The time the algorithm needs to run this example is proportional(linear) to the size of the data set.
O(n)-linear time complexity