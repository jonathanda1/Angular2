num = 100

if num > 2
  puts "greater than 2"
elsif num == 2
  puts "equals 2"
else
  puts "less than 2"
end

if num%2==0
  puts "even"
else
  puts "odd"
end
# above turned into one line below
num % 2 == 0 ? puts("even") : puts("odd")
puts num % 2 == 0? "even" : "odd"

weather ||= "cloudy"
puts weather
# set weather to "cloudy" unless it has already been set to a value
# if weather has a value it will stay, if not it will be "cloudy"


