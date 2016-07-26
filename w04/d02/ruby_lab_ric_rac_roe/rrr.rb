puts "Welcome to ric-rac-roe"
$board = [
  ["","",""],
  ["","",""],
  ["","",""]]

$board.each { |x| puts "#{x}\n" }

$turn = 0
$player = "X"

puts $turn

def player
  if $turn%2 == 0
     player = "X"
  # $turn+=1
  move()
  else
    player = "O"
  # $turn+=1
  move()
  end
end

def move
  puts "Hi #{$player}, make your move"
  user_input = gets.chomp
  if user_input.downcase == "a1"
    $board[0][0] = "X" or "O"
  elsif user_input.downcase == "a2"
    $board[1][0] = "X" or "O"
  elsif user_input.downcase == "a3"
    $board[2][0] = "X" or "O"
  elsif user_input.downcase == "b1"
    $board[0][1] = "X" or "O"
  elsif user_input.downcase == "b2"
    $board[1][1] = "X" or "O"
  elsif user_input.downcase == "b3"
    $board[2][1] = "X" or "O"
  elsif user_input.downcase == "c1"
    $board[0][2] = "X" or "O"
  elsif user_input.downcase == "c2"
    $board[1][2] = "X" or "O"
  elsif user_input.downcase == "c3"
    $board[2][2] = "X" or "O"
  end
$board.each { |x| puts "#{x}\n" }
$turn+=1
player()
end



player()


