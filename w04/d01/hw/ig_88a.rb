puts "Freeze! Who are you?"

user_input = gets.chomp
unless user_input == "Han Solo"
  puts "You must die!(zap zap kaboom)"
else user_input == "(zap)"
   20.times do
    puts "(zap)"
  end
end
