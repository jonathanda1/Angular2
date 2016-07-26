puts "Welcome"

board = [
         ["", "", ""],
         ["", "", ""],
         ["", "", ""]]

board.each {|x| puts "#{x}\n"}

puts "Make your move"
user_input = gets.chomp
  if user_input == "a1" or "A1"
      board[0][0] == "X"
  end
