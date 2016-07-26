puts "(beep-boop whrrrrrr bleep)
  Welcome to the R2D2 calculator!"

puts "Please enter which operator you would like to use ('+', '-', '*', '/').
Enter 'q' to exit."

user_input = gets.chomp
  if user_input == 'q'
  puts "Goodbye"
  exit
  else
  puts "Enter your first operand:"
  answer = gets.chomp.to_i
  puts "Enter your second operand:"
  answer2 = gets.chomp.to_i
    if user_input == "+"
    puts answer + answer2
    elsif user_input == "-"
    puts answer - answer2
    elsif user_input == "*"
    puts answer * answer2
    elsif user_input == "/"
    puts answer / answer2
  end
end
