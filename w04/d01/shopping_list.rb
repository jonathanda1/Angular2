NAME = "Jonathan"
age = 24
@store = "costco"
shopping_list = ["brownies","bananas","soap",
"conditioner"]
shopping_list.each {|x| puts x.length > 8}
 # ^ this doesn't print out item. just returns boolean value
 # below checks length and prints item
 # do and end are equivalent to {}
shopping_list.each do |item|
  puts item if item.length > 8
end
#does the same job below
puts shopping_list.select { |item| item.length > 8}
