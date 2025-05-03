# Find the lowest value in an array
def lowest_value(array)
  lowest = array[0]
  array.each do |value|
    if value < lowest
      lowest = value
    end
  end
  lowest
end

array = [5, 3, 8, 1, 4]
puts "The lowest value in the array is: #{lowest_value(array)}"