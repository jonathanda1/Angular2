def assert statement
    raise "Assertion failed" unless statement
end

# write a function that takes an array of integers as an argument and returns the sum of the integers in the array
def sum_arr (arr)
  sum = 0
  arr.each do |x|
    sum += x
  end
  sum
end

assert sum_arr([3,5,17,3]) == 28
assert sum_arr([8,5,4,3,2,4,5]) == 31
puts "sum_arr works!"

# write a function that takes an positive integer n and returns the sum of all integers less than or equal to n
def sum_less_equal(n)
  sum = 0
  for i in 1..n
    sum += i
  end
  sum
end

assert sum_less_equal(5) == 15
assert sum_less_equal(8) == 36
puts "sum_less_equal works!"

# write a function that uses the sum_arr function you wrote above to convert a 2-D array into a 1-D array that contains the sum of each individual array
def arr2d_to_sum1d(arr2d)
  new_array = []
  arr2d.each do |i|
    new_array.push(sum_arr(i))
  end
  new_array
end

assert arr2d_to_sum1d([[2,4,5],[3,6,9],[7,8,9]]) == [11,18,24]
assert arr2d_to_sum1d([[5,6,4],[9,8,8],[6,6,6]]) == [15,25,18]
puts "arr2d_to_sum1d works!"

# write a function that takes a 2-D array and returns a string that lists all the numbers out in left-to-right, top-to-bottom order
def arr2d_to_s(arr2d)
  new_array = []
  arr2d.each do |i|
    new_array.push(i)
  end
  new_array.join("")
end

assert arr2d_to_s([[2,4,5],[3,6,9],[7,8,9]]) == "245369789"
assert arr2d_to_s([[5,6,4],[9,8,8],[6,6,6]]) == "564988666"
puts "arr2d_to_s works!"

puts "Congratulations! You have completed the loops lab!"
